/**
 * Exchango AI — Unified i18n Core
 *
 * 14 languages, URL-param driven (?lang=xx), with localStorage + navigator
 * fallbacks. Pages register translations via window.ExchangoI18N.register().
 *
 *   <element data-i18n="key">                  → element.innerHTML = dict[key]
 *   <element data-i18n-attr="title:keyA, alt:keyB">  → element.setAttribute(...)
 *   <head><title data-i18n="docTitle"></title>
 *   <meta name="description" data-i18n-attr="content:metaDesc">
 *
 * Internal links automatically receive the current ?lang= param.
 * <html dir> is toggled to "rtl" for Arabic.
 */
(function (global) {
    'use strict';

    var SUPPORTED = ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ar', 'hi', 'th', 'tr'];
    var DEFAULT_LANG = 'ko';
    var FALLBACK_LANG = 'en';
    var STORAGE_KEY = 'exchango_lang';
    var RTL_LANGS = ['ar'];

    // Native names shown in the language picker
    var LANG_LABELS = {
        ko: '한국어',
        en: 'English',
        ja: '日本語',
        zh: '中文',
        es: 'Español',
        fr: 'Français',
        de: 'Deutsch',
        it: 'Italiano',
        pt: 'Português',
        ru: 'Русский',
        ar: 'العربية',
        hi: 'हिन्दी',
        th: 'ไทย',
        tr: 'Türkçe'
    };

    var dictionaries = {}; // { lang: { key: value, ... } } — merged from all namespaces
    var currentLang = null;

    function detectLang() {
        var url = new URLSearchParams(window.location.search).get('lang');
        if (url && SUPPORTED.indexOf(url) !== -1) return url;

        var stored = null;
        try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

        var browser = (navigator.language || navigator.userLanguage || DEFAULT_LANG).toLowerCase().split('-')[0];
        if (SUPPORTED.indexOf(browser) !== -1) return browser;

        return FALLBACK_LANG;
    }

    function register(namespace, translations) {
        // translations = { ko: {...}, en: {...}, ... }
        Object.keys(translations).forEach(function (lang) {
            if (!dictionaries[lang]) dictionaries[lang] = {};
            var bag = translations[lang];
            Object.keys(bag).forEach(function (key) {
                dictionaries[lang][key] = bag[key];
            });
        });
    }

    function lookup(key) {
        var lang = currentLang || DEFAULT_LANG;
        if (dictionaries[lang] && dictionaries[lang][key] != null) return dictionaries[lang][key];
        if (dictionaries[FALLBACK_LANG] && dictionaries[FALLBACK_LANG][key] != null) return dictionaries[FALLBACK_LANG][key];
        if (dictionaries[DEFAULT_LANG] && dictionaries[DEFAULT_LANG][key] != null) return dictionaries[DEFAULT_LANG][key];
        return null;
    }

    function applyText(el) {
        var key = el.getAttribute('data-i18n');
        if (!key) return;
        var v = lookup(key);
        if (v == null) return;
        // Allow simple HTML (<br>, <strong>) in translations
        el.innerHTML = v;
    }

    function applyAttrs(el) {
        var spec = el.getAttribute('data-i18n-attr');
        if (!spec) return;
        spec.split(',').forEach(function (pair) {
            var parts = pair.split(':');
            if (parts.length !== 2) return;
            var attr = parts[0].trim();
            var key = parts[1].trim();
            var v = lookup(key);
            if (v != null) el.setAttribute(attr, v);
        });
    }

    function applyAll() {
        document.querySelectorAll('[data-i18n]').forEach(applyText);
        document.querySelectorAll('[data-i18n-attr]').forEach(applyAttrs);
    }

    function preserveLangOnLinks() {
        // Add ?lang=xx to internal links so language persists across navigation
        var lang = currentLang;
        if (!lang) return;
        document.querySelectorAll('a[href]').forEach(function (a) {
            var href = a.getAttribute('href');
            if (!href) return;
            // Skip externals, hashes, mailto/tel
            if (/^(https?:|mailto:|tel:|#)/i.test(href)) return;
            // Skip if already has ?lang=
            try {
                var u = new URL(href, window.location.href);
                if (u.origin !== window.location.origin) return;
                u.searchParams.set('lang', lang);
                // Preserve hash
                a.setAttribute('href', u.pathname + u.search + u.hash);
            } catch (e) {}
        });
    }

    function setHtmlAttrs() {
        document.documentElement.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('dir', RTL_LANGS.indexOf(currentLang) !== -1 ? 'rtl' : 'ltr');
    }

    function switchLang(lang) {
        if (SUPPORTED.indexOf(lang) === -1) return;
        currentLang = lang;
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

        // Update URL without reload
        var url = new URL(window.location);
        if (url.searchParams.get('lang') !== lang) {
            url.searchParams.set('lang', lang);
            window.history.replaceState({}, '', url.toString());
        }

        setHtmlAttrs();
        applyAll();
        preserveLangOnLinks();
        updatePickerUI();

        // Notify listeners
        document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang: lang } }));
    }

    /* ---------- Language picker UI ---------- */

    var MOBILE_BREAKPOINT = 640;
    function isMobile() { return window.innerWidth <= MOBILE_BREAKPOINT; }

    // Single shared backdrop for whichever picker is open
    var sharedBackdrop = null;
    function showBackdrop(onClick) {
        if (!sharedBackdrop) {
            sharedBackdrop = document.createElement('div');
            sharedBackdrop.className = 'lang-picker-backdrop';
            document.body.appendChild(sharedBackdrop);
        }
        sharedBackdrop.onclick = onClick;
        // Force reflow so transition fires from opacity 0
        sharedBackdrop.offsetWidth; // eslint-disable-line no-unused-expressions
        sharedBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function hideBackdrop() {
        if (!sharedBackdrop) return;
        sharedBackdrop.classList.remove('show');
        sharedBackdrop.onclick = null;
        document.body.style.overflow = '';
    }

    function buildPicker(host) {
        if (!host || host.dataset.i18nPickerReady === '1') return;
        host.dataset.i18nPickerReady = '1';
        host.classList.add('lang-picker');
        host.setAttribute('role', 'group');
        host.setAttribute('aria-label', 'Language');

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'lang-picker-btn';
        btn.setAttribute('aria-haspopup', 'listbox');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML =
            '<span class="lang-picker-globe" aria-hidden="true">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>' +
            '</span>' +
            '<span class="lang-picker-current"></span>' +
            '<span class="lang-picker-caret" aria-hidden="true">▾</span>';
        host.appendChild(btn);

        // The menu is appended to <body>, NOT to the host. Several mobile nav
        // containers use `transform`, which would re-anchor any descendant
        // `position: fixed` element to that nav container instead of the
        // viewport — breaking the bottom-sheet layout. Living at body level
        // guarantees true viewport-fixed positioning.
        var menu = document.createElement('ul');
        menu.className = 'lang-picker-menu';
        menu.setAttribute('role', 'listbox');
        SUPPORTED.forEach(function (lang) {
            var li = document.createElement('li');
            li.setAttribute('role', 'option');
            li.dataset.lang = lang;
            li.tabIndex = -1;
            li.textContent = LANG_LABELS[lang];
            li.addEventListener('click', function (e) {
                e.stopPropagation();
                switchLang(lang);
                close();
                closeContainingNavMenu();
            });
            menu.appendChild(li);
        });
        document.body.appendChild(menu);
        // Tag menu so updatePickerUI() can find it
        menu.dataset.langPickerMenu = '1';

        function positionDesktopMenu() {
            // Right-align the menu under the button
            var rect = btn.getBoundingClientRect();
            var menuWidth = Math.max(menu.offsetWidth, 160);
            menu.style.position = 'fixed';
            menu.style.top = (rect.bottom + 6) + 'px';
            menu.style.left = Math.max(8, rect.right - menuWidth) + 'px';
            menu.style.right = 'auto';
            menu.style.bottom = 'auto';
        }
        function clearDesktopPos() {
            menu.style.top = '';
            menu.style.left = '';
            menu.style.right = '';
            menu.style.bottom = '';
            menu.style.position = '';
        }
        function closeContainingNavMenu() {
            var navPanel = host.closest ? host.closest('.nav-links, .doc-nav-links') : null;
            if (!navPanel || !navPanel.classList.contains('open')) return;

            navPanel.classList.remove('open');

            var nav = navPanel.closest ? navPanel.closest('nav') : null;
            var toggles = (nav || document).querySelectorAll('.nav-toggle');
            toggles.forEach(function (toggle) {
                if (!navPanel.id || toggle.getAttribute('aria-controls') === navPanel.id) {
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        }

        function open() {
            host.classList.add('open');
            menu.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            if (isMobile()) {
                clearDesktopPos();
                showBackdrop(close);
            } else {
                positionDesktopMenu();
            }
        }
        function close() {
            host.classList.remove('open');
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            hideBackdrop();
        }

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            menu.classList.contains('open') ? close() : open();
        });

        // Stop clicks inside the menu from triggering the document close
        menu.addEventListener('click', function (e) { e.stopPropagation(); });

        // Tap outside the host AND the menu closes (desktop). Mobile: backdrop.
        document.addEventListener('click', function (e) {
            if (!menu.classList.contains('open')) return;
            if (host.contains(e.target) || menu.contains(e.target)) return;
            close();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menu.classList.contains('open')) close();
        });

        // Reposition on resize / scroll while open (desktop only)
        function syncOpenState() {
            if (!menu.classList.contains('open')) return;
            if (isMobile()) {
                clearDesktopPos();
                showBackdrop(close);
            } else {
                hideBackdrop();
                positionDesktopMenu();
            }
        }
        window.addEventListener('resize', syncOpenState);
        window.addEventListener('scroll', function () {
            if (menu.classList.contains('open') && !isMobile()) positionDesktopMenu();
        }, { passive: true });
    }

    function updatePickerUI() {
        document.querySelectorAll('.lang-picker .lang-picker-current').forEach(function (label) {
            label.textContent = LANG_LABELS[currentLang] || currentLang;
        });
        // Menus live at body level, query directly
        document.querySelectorAll('.lang-picker-menu li[data-lang]').forEach(function (li) {
            li.setAttribute('aria-selected', li.dataset.lang === currentLang ? 'true' : 'false');
            li.classList.toggle('active', li.dataset.lang === currentLang);
        });
    }

    function initPickers() {
        document.querySelectorAll('[data-lang-picker]').forEach(buildPicker);
    }

    /* ---------- Init ---------- */

    function init() {
        currentLang = detectLang();
        setHtmlAttrs();
        initPickers();
        applyAll();
        preserveLangOnLinks();
        updatePickerUI();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /* ---------- Public API ---------- */

    global.ExchangoI18N = {
        register: register,
        switchLang: switchLang,
        getLang: function () { return currentLang; },
        supported: SUPPORTED.slice(),
        labels: LANG_LABELS,
        applyAll: applyAll
    };
})(window);
