// Translation system for Exchango FX download page
(function() {
    'use strict';

    console.log('🌐 Exchango FX download page translation system initialized');

    // Translation data for download.html
    const translations = {
        ko: {
            pageTitle: "Exchango FX - 앱 다운로드",
            appTitle: "Exchango FX",
            appTagline: "전 세계를 위한 스마트 환율 계산기",
            appDescription: "150개 이상의 통화로 환전, 계산, 경비 분할",
            loadingText: "앱 스토어로 이동 중...",
            feature1: "150+ 통화",
            feature2: "14개 언어",
            feature3: "실시간 환율",
            helpText: "자동 이동이 안 되나요?<br>스토어 버튼을 눌러주세요"
        },
        en: {
            pageTitle: "Exchango FX - Download App",
            appTitle: "Exchango FX",
            appTagline: "Your Global Currency Companion",
            appDescription: "Convert, calculate, and split expenses across 150+ currencies",
            loadingText: "Redirecting to App Store...",
            feature1: "150+ Currencies",
            feature2: "14 Languages",
            feature3: "Real-time Rates",
            helpText: "Not redirecting?<br>Tap your store button"
        },
        ja: {
            pageTitle: "Exchango FX - アプリダウンロード",
            appTitle: "Exchango FX",
            appTagline: "グローバル通貨コンパニオン",
            appDescription: "150以上の通貨で両替、計算、経費分割",
            loadingText: "App Storeへ移動中...",
            feature1: "150以上の通貨",
            feature2: "14言語対応",
            feature3: "リアルタイム為替",
            helpText: "自動で移動しませんか？<br>ストアボタンを押してください"
        },
        zh: {
            pageTitle: "Exchango FX - 下载应用",
            appTitle: "Exchango FX",
            appTagline: "全球货币伴侣",
            appDescription: "150多种货币的兑换、计算和费用分摊",
            loadingText: "正在跳转到应用商店...",
            feature1: "150多种货币",
            feature2: "14种语言",
            feature3: "实时汇率",
            helpText: "没有自动跳转？<br>点击商店按钮"
        },
        es: {
            pageTitle: "Exchango FX - Descargar App",
            appTitle: "Exchango FX",
            appTagline: "Tu Compañero de Divisas Global",
            appDescription: "Convierte, calcula y divide gastos en más de 150 monedas",
            loadingText: "Redirigiendo a la App Store...",
            feature1: "Más de 150 monedas",
            feature2: "14 idiomas",
            feature3: "Tasas en tiempo real",
            helpText: "¿No se redirige?<br>Toca el botón de tu tienda"
        },
        fr: {
            pageTitle: "Exchango FX - Télécharger l'App",
            appTitle: "Exchango FX",
            appTagline: "Votre Compagnon de Devises Mondial",
            appDescription: "Convertissez, calculez et divisez les dépenses dans plus de 150 devises",
            loadingText: "Redirection vers l'App Store...",
            feature1: "Plus de 150 devises",
            feature2: "14 langues",
            feature3: "Taux en temps réel",
            helpText: "Pas de redirection ?<br>Appuyez sur le bouton de votre magasin"
        },
        de: {
            pageTitle: "Exchango FX - App herunterladen",
            appTitle: "Exchango FX",
            appTagline: "Ihr globaler Währungsbegleiter",
            appDescription: "Konvertieren, berechnen und teilen Sie Ausgaben in über 150 Währungen",
            loadingText: "Weiterleitung zum App Store...",
            feature1: "Über 150 Währungen",
            feature2: "14 Sprachen",
            feature3: "Echtzeit-Kurse",
            helpText: "Keine Weiterleitung?<br>Tippen Sie auf Ihre Store-Schaltfläche"
        },
        pt: {
            pageTitle: "Exchango FX - Baixar App",
            appTitle: "Exchango FX",
            appTagline: "Seu Companheiro de Moedas Global",
            appDescription: "Converta, calcule e divida despesas em mais de 150 moedas",
            loadingText: "Redirecionando para a App Store...",
            feature1: "Mais de 150 moedas",
            feature2: "14 idiomas",
            feature3: "Taxas em tempo real",
            helpText: "Não está redirecionando?<br>Toque no botão da sua loja"
        },
        it: {
            pageTitle: "Exchango FX - Scarica App",
            appTitle: "Exchango FX",
            appTagline: "Il Tuo Compagno di Valute Globale",
            appDescription: "Converti, calcola e dividi le spese in oltre 150 valute",
            loadingText: "Reindirizzamento all'App Store...",
            feature1: "Oltre 150 valute",
            feature2: "14 lingue",
            feature3: "Tassi in tempo reale",
            helpText: "Non si reindirizza?<br>Tocca il pulsante del tuo store"
        },
        ru: {
            pageTitle: "Exchango FX - Скачать приложение",
            appTitle: "Exchango FX",
            appTagline: "Ваш Глобальный Валютный Помощник",
            appDescription: "Конвертируйте, рассчитывайте и делите расходы в более чем 150 валютах",
            loadingText: "Перенаправление в App Store...",
            feature1: "Более 150 валют",
            feature2: "14 языков",
            feature3: "Курсы в реальном времени",
            helpText: "Не перенаправляет?<br>Нажмите кнопку вашего магазина"
        },
        ar: {
            pageTitle: "Exchango FX - تحميل التطبيق",
            appTitle: "Exchango FX",
            appTagline: "رفيقك العالمي للعملات",
            appDescription: "تحويل وحساب وتقسيم النفقات عبر أكثر من 150 عملة",
            loadingText: "إعادة التوجيه إلى App Store...",
            feature1: "أكثر من 150 عملة",
            feature2: "14 لغة",
            feature3: "أسعار فورية",
            helpText: "لا يتم إعادة التوجيه؟<br>انقر على زر المتجر الخاص بك"
        },
        hi: {
            pageTitle: "Exchango FX - ऐप डाउनलोड करें",
            appTitle: "Exchango FX",
            appTagline: "आपका वैश्विक मुद्रा साथी",
            appDescription: "150+ मुद्राओं में परिवर्तित करें, गणना करें और खर्च विभाजित करें",
            loadingText: "App Store पर रीडायरेक्ट किया जा रहा है...",
            feature1: "150+ मुद्राएं",
            feature2: "14 भाषाएं",
            feature3: "वास्तविक समय दरें",
            helpText: "रीडायरेक्ट नहीं हो रहा?<br>अपने स्टोर बटन पर टैप करें"
        },
        th: {
            pageTitle: "Exchango FX - ดาวน์โหลดแอป",
            appTitle: "Exchango FX",
            appTagline: "ผู้ช่วยสกุลเงินทั่วโลกของคุณ",
            appDescription: "แปลง คำนวณ และแบ่งค่าใช้จ่ายในสกุลเงินกว่า 150 สกุล",
            loadingText: "กำลังเปลี่ยนเส้นทางไปยัง App Store...",
            feature1: "มากกว่า 150 สกุลเงิน",
            feature2: "14 ภาษา",
            feature3: "อัตราแลกเปลี่ยนแบบเรียลไทม์",
            helpText: "ไม่เปลี่ยนเส้นทางอัตโนมัติ?<br>แตะปุ่มสต อร์ของคุณ"
        },
        tr: {
            pageTitle: "Exchango FX - Uygulamayı İndir",
            appTitle: "Exchango FX",
            appTagline: "Küresel Para Birimi Yardımcınız",
            appDescription: "150'den fazla para biriminde dönüştürün, hesaplayın ve harcamaları bölün",
            loadingText: "App Store'a yönlendiriliyor...",
            feature1: "150'den fazla para birimi",
            feature2: "14 dil",
            feature3: "Gerçek zamanlı kurlar",
            helpText: "Yönlendirilmiyor musunuz?<br>Mağaza düğmenize dokunun"
        }
    };

    // Supported languages
    const supportedLanguages = ['ar', 'de', 'en', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pt', 'ru', 'th', 'tr', 'zh'];

    /**
     * Get current language from URL parameter
     */
    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');

        if (lang && supportedLanguages.includes(lang)) {
            return lang;
        }

        // Default to English if no valid language parameter
        return 'en';
    }

    /**
     * Apply translations to the page
     */
    function applyTranslations() {
        const currentLang = getCurrentLanguage();
        const translation = translations[currentLang];

        if (!translation) {
            console.warn(`Translation not found for language: ${currentLang}`);
            return;
        }

        // Update page title
        document.title = translation.pageTitle;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translation[key]) {
                // Check if it contains HTML (like <br>)
                if (translation[key].includes('<br>')) {
                    element.innerHTML = translation[key];
                } else {
                    element.textContent = translation[key];
                }
            }
        });

        console.log(`✅ Translations applied for language: ${currentLang}`);
    }

    // Apply translations when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTranslations);
    } else {
        applyTranslations();
    }

    // Make applyTranslations available globally for manual refresh
    window.applyDownloadTranslations = applyTranslations;

})();
