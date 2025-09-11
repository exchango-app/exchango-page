// Exchango Index Page - Interactive Functionality & Performance Optimizations
(function() {
    'use strict';
    
    console.log('🚀 Exchango index page scripts initializing...');
    
    // ===== CONFIGURATION & CONSTANTS =====
    const CONFIG = {
        scrollThreshold: 100,
        animationDuration: 300,
        intersectionThreshold: 0.1,
        debounceDelay: 100,
        features: {
            backToTop: true,
            scrollAnimations: true,
            languageSwitching: true,
            lazyLoading: true,
            performanceMonitoring: true
        }
    };
    
    // ===== UTILITY FUNCTIONS =====
    const utils = {
        // Debounce function for performance
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },
        
        // Throttle function for scroll events
        throttle: function(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },
        
        // Check if element is in viewport
        isInViewport: function(element, threshold = 0.1) {
            const rect = element.getBoundingClientRect();
            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return rect.bottom > (viewHeight * threshold) && rect.top < (viewHeight * (1 - threshold));
        },
        
        // Smooth scroll to element
        smoothScrollTo: function(target, offset = 0) {
            const element = typeof target === 'string' ? document.querySelector(target) : target;
            if (!element) return;
            
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        },
        
        // Get preferred reduced motion setting
        prefersReducedMotion: function() {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        }
    };
    
    // ===== BACK TO TOP FUNCTIONALITY =====
    const BackToTop = {
        button: null,
        visible: false,
        
        init: function() {
            if (!CONFIG.features.backToTop) return;
            
            this.button = document.getElementById('backToTop');
            if (!this.button) return;
            
            this.bindEvents();
            this.handleScroll(); // Check initial state
            console.log('✅ Back to top button initialized');
        },
        
        bindEvents: function() {
            // Throttled scroll handler
            window.addEventListener('scroll', utils.throttle(() => {
                this.handleScroll();
            }, 100));
            
            // Click handler
            this.button.addEventListener('click', (e) => {
                e.preventDefault();
                this.scrollToTop();
            });
            
            // Keyboard support
            this.button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.scrollToTop();
                }
            });
        },
        
        handleScroll: function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const shouldShow = scrollTop > CONFIG.scrollThreshold;
            
            if (shouldShow !== this.visible) {
                this.visible = shouldShow;
                this.toggleVisibility();
            }
        },
        
        toggleVisibility: function() {
            if (this.visible) {
                this.button.classList.add('visible');
                this.button.setAttribute('aria-hidden', 'false');
            } else {
                this.button.classList.remove('visible');
                this.button.setAttribute('aria-hidden', 'true');
            }
        },
        
        scrollToTop: function() {
            const duration = utils.prefersReducedMotion() ? 0 : 800;
            
            if (duration === 0) {
                window.scrollTo(0, 0);
                return;
            }
            
            const start = window.pageYOffset;
            const startTime = performance.now();
            
            const animateScroll = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeInOutCubic = progress < 0.5 
                    ? 4 * progress * progress * progress 
                    : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
                
                window.scrollTo(0, start * (1 - easeInOutCubic));
                
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            };
            
            requestAnimationFrame(animateScroll);
        }
    };
    
    // ===== SCROLL ANIMATIONS =====
    const ScrollAnimations = {
        observer: null,
        animated: new Set(),
        
        init: function() {
            if (!CONFIG.features.scrollAnimations || utils.prefersReducedMotion()) return;
            
            this.setupIntersectionObserver();
            this.observeElements();
            console.log('✅ Scroll animations initialized');
        },
        
        setupIntersectionObserver: function() {
            const options = {
                threshold: CONFIG.intersectionThreshold,
                rootMargin: '0px 0px 50px 0px'
            };
            
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.animated.has(entry.target)) {
                        this.animateElement(entry.target);
                        this.animated.add(entry.target);
                    }
                });
            }, options);
        },
        
        observeElements: function() {
            const elementsToAnimate = document.querySelectorAll(`
                .feature-card,
                .tech-card,
                .benefit-card,
                .stat-card,
                .section-header
            `);
            
            elementsToAnimate.forEach((element, index) => {
                // Add initial state
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = `opacity 0.6s ease ${Math.min(index * 0.08, 0.5)}s, transform 0.6s ease ${Math.min(index * 0.08, 0.5)}s`;
                
                this.observer.observe(element);
            });
        },
        
        animateElement: function(element) {
            // Double requestAnimationFrame for smoother animation
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.classList.add('animate-in');
                });
            });
        },
        
        destroy: function() {
            if (this.observer) {
                this.observer.disconnect();
            }
        }
    };
    
    // ===== SMOOTH SCROLLING FOR NAVIGATION =====
    const SmoothNavigation = {
        init: function() {
            this.bindNavigationEvents();
            console.log('✅ Smooth navigation initialized');
        },
        
        bindNavigationEvents: function() {
            // Handle all anchor links that point to page sections
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a[href^="#"]');
                if (!link) return;
                
                const href = link.getAttribute('href');
                if (href === '#' || href.length <= 1) return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                this.scrollToSection(target);
                
                // Update URL without triggering page reload
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            });
            
            // Handle browser back/forward buttons
            window.addEventListener('popstate', () => {
                const hash = window.location.hash;
                if (hash) {
                    const target = document.querySelector(hash);
                    if (target) {
                        this.scrollToSection(target);
                    }
                }
            });
        },
        
        scrollToSection: function(target) {
            const headerOffset = 80; // Account for any fixed headers
            utils.smoothScrollTo(target, headerOffset);
            
            // Set focus to target for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus();
            
            // Remove tabindex after focus for normal tab flow
            setTimeout(() => {
                target.removeAttribute('tabindex');
            }, 1000);
        }
    };
    
    // ===== LANGUAGE SWITCHING ENHANCEMENT =====
    const LanguageSwitcher = {
        currentLang: 'ko',
        
        init: function() {
            if (!CONFIG.features.languageSwitching) return;
            
            this.currentLang = this.getCurrentLanguage();
            this.bindLanguageEvents();
            this.updateActiveStates();
            console.log(`✅ Language switcher initialized (${this.currentLang})`);
        },
        
        getCurrentLanguage: function() {
            const urlParams = new URLSearchParams(window.location.search);
            const lang = urlParams.get('lang');
            return ['ko', 'en', 'ja', 'zh'].includes(lang) ? lang : 'ko';
        },
        
        bindLanguageEvents: function() {
            // Enhance language buttons with smooth transitions
            const langButtons = document.querySelectorAll('.lang-btn, .footer-lang-btn');
            
            langButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const href = button.getAttribute('href');
                    const newLang = new URLSearchParams(href.split('?')[1]).get('lang');
                    
                    if (newLang && newLang !== this.currentLang) {
                        this.switchLanguage(newLang, e);
                    }
                });
                
                // Keyboard support
                button.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        button.click();
                    }
                });
            });
        },
        
        switchLanguage: function(newLang, event) {
            // Add loading state
            document.body.classList.add('language-switching');
            
            // Update URL and reload with new language
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            
            // Smooth transition
            document.documentElement.style.opacity = '0.95';
            
            setTimeout(() => {
                window.location.href = url.toString();
            }, 150);
        },
        
        updateActiveStates: function() {
            const langButtons = document.querySelectorAll('.lang-btn, .footer-lang-btn');
            
            langButtons.forEach(button => {
                const href = button.getAttribute('href');
                const buttonLang = new URLSearchParams(href.split('?')[1]).get('lang');
                
                button.classList.toggle('active', buttonLang === this.currentLang);
            });
        }
    };
    
    // ===== LAZY LOADING FOR IMAGES =====
    const LazyLoader = {
        observer: null,
        
        init: function() {
            if (!CONFIG.features.lazyLoading || !('IntersectionObserver' in window)) return;
            
            this.setupObserver();
            this.observeImages();
            console.log('✅ Lazy loading initialized');
        },
        
        setupObserver: function() {
            const options = {
                threshold: 0.1,
                rootMargin: '50px 0px'
            };
            
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        this.observer.unobserve(entry.target);
                    }
                });
            }, options);
        },
        
        observeImages: function() {
            const images = document.querySelectorAll('.device-screenshot, .phone-screenshot');
            
            images.forEach(img => {
                if (img.dataset.src) {
                    this.observer.observe(img);
                } else {
                    // Images that are already loaded
                    this.optimizeImage(img);
                }
            });
        },
        
        loadImage: function(img) {
            const src = img.dataset.src || img.src;
            
            const imageLoader = new Image();
            imageLoader.onload = () => {
                img.src = src;
                img.classList.add('loaded');
                this.optimizeImage(img);
            };
            imageLoader.src = src;
        },
        
        optimizeImage: function(img) {
            // Add loading attribute for better performance
            img.loading = 'lazy';
            
            // Optimize for different screen densities
            if (window.devicePixelRatio > 1) {
                img.style.imageRendering = 'crisp-edges';
            }
        }
    };
    
    // ===== PERFORMANCE MONITORING =====
    const PerformanceMonitor = {
        metrics: {
            loadTime: 0,
            interactionTime: 0,
            errors: []
        },
        
        init: function() {
            if (!CONFIG.features.performanceMonitoring) return;
            
            this.measureLoadTime();
            this.setupErrorHandling();
            this.monitorInteractions();
            console.log('✅ Performance monitoring initialized');
        },
        
        measureLoadTime: function() {
            window.addEventListener('load', () => {
                const loadTime = performance.now();
                this.metrics.loadTime = loadTime;
                
                console.log(`📊 Page load time: ${loadTime.toFixed(2)}ms`);
                
                // Report to analytics if needed
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'page_load_time', {
                        value: Math.round(loadTime)
                    });
                }
            });
        },
        
        setupErrorHandling: function() {
            window.addEventListener('error', (e) => {
                this.metrics.errors.push({
                    message: e.message,
                    filename: e.filename,
                    line: e.lineno,
                    timestamp: new Date().toISOString()
                });
                
                console.warn('⚠️ JavaScript error:', e.message);
            });
            
            // Promise rejection handling
            window.addEventListener('unhandledrejection', (e) => {
                this.metrics.errors.push({
                    message: 'Unhandled Promise Rejection: ' + e.reason,
                    timestamp: new Date().toISOString()
                });
                
                console.warn('⚠️ Unhandled promise rejection:', e.reason);
            });
        },
        
        monitorInteractions: function() {
            let interactionStart = 0;
            
            ['click', 'touchstart', 'keydown'].forEach(eventType => {
                document.addEventListener(eventType, () => {
                    interactionStart = performance.now();
                });
            });
            
            ['click', 'touchend', 'keyup'].forEach(eventType => {
                document.addEventListener(eventType, () => {
                    if (interactionStart) {
                        const interactionTime = performance.now() - interactionStart;
                        this.metrics.interactionTime = Math.max(this.metrics.interactionTime, interactionTime);
                    }
                });
            });
        },
        
        getMetrics: function() {
            return this.metrics;
        }
    };
    
    // ===== ACCESSIBILITY ENHANCEMENTS =====
    const AccessibilityEnhancer = {
        init: function() {
            this.setupKeyboardNavigation();
            this.enhanceFocusManagement();
            this.setupScreenReaderSupport();
            console.log('✅ Accessibility enhancements initialized');
        },
        
        setupKeyboardNavigation: function() {
            // Trap focus in modals (if any are added later)
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    // Close any open modals or overlays
                    const activeModal = document.querySelector('.modal.active');
                    if (activeModal) {
                        this.closeModal(activeModal);
                    }
                }
            });
        },
        
        enhanceFocusManagement: function() {
            // Skip links for better navigation
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector('#main-content');
                    if (target) {
                        target.focus();
                        utils.smoothScrollTo(target);
                    }
                });
            }
            
            // Enhance focus visibility
            let isTabbing = false;
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    isTabbing = true;
                    document.body.classList.add('user-is-tabbing');
                }
            });
            
            document.addEventListener('mousedown', () => {
                isTabbing = false;
                document.body.classList.remove('user-is-tabbing');
            });
        },
        
        setupScreenReaderSupport: function() {
            // Announce dynamic content changes
            const announcer = document.createElement('div');
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.className = 'sr-only';
            announcer.style.cssText = `
                position: absolute !important;
                left: -10000px !important;
                width: 1px !important;
                height: 1px !important;
                overflow: hidden !important;
            `;
            document.body.appendChild(announcer);
            
            window.announceToScreenReader = (message) => {
                announcer.textContent = message;
                setTimeout(() => {
                    announcer.textContent = '';
                }, 1000);
            };
        }
    };
    
    // ===== MOBILE OPTIMIZATIONS =====
    const MobileOptimizer = {
        isMobile: false,
        touchStartY: 0,
        
        init: function() {
            this.detectMobile();
            if (this.isMobile) {
                this.setupMobileOptimizations();
                console.log('📱 Mobile optimizations initialized');
            }
        },
        
        detectMobile: function() {
            this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                           window.innerWidth <= 768;
        },
        
        setupMobileOptimizations: function() {
            // Optimize touch events
            this.setupTouchOptimizations();
            
            // Prevent bounce scrolling on iOS
            this.preventBounceScrolling();
            
            // Optimize viewport handling
            this.optimizeViewport();
        },
        
        setupTouchOptimizations: function() {
            // Add touch feedback for interactive elements
            const touchElements = document.querySelectorAll('button, .cta-btn, .lang-btn, .download-btn');
            
            touchElements.forEach(element => {
                element.addEventListener('touchstart', (e) => {
                    element.classList.add('touch-active');
                    this.touchStartY = e.touches[0].clientY;
                }, { passive: true });
                
                element.addEventListener('touchend', () => {
                    setTimeout(() => {
                        element.classList.remove('touch-active');
                    }, 150);
                }, { passive: true });
                
                // Handle touch move to cancel if scrolling
                element.addEventListener('touchmove', (e) => {
                    if (Math.abs(e.touches[0].clientY - this.touchStartY) > 10) {
                        element.classList.remove('touch-active');
                    }
                }, { passive: true });
            });
        },
        
        preventBounceScrolling: function() {
            document.addEventListener('touchmove', (e) => {
                // Allow scrolling within scrollable elements
                let element = e.target;
                while (element && element !== document.body) {
                    if (element.scrollHeight > element.clientHeight) {
                        return;
                    }
                    element = element.parentNode;
                }
                
                // Prevent bounce scrolling on body
                if (e.target === document.body) {
                    e.preventDefault();
                }
            }, { passive: false });
        },
        
        optimizeViewport: function() {
            // Handle viewport changes (orientation, keyboard)
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            
            window.addEventListener('resize', utils.debounce(() => {
                vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }, 150));
        }
    };
    
    // ===== PHONE MOCKUP CAROUSEL =====
    const PhoneMockupCarousel = {
        container: null,
        images: [],
        currentIndex: 0,
        autoplayInterval: null,
        autoplayDelay: 4000, // 4 seconds between slides
        isAnimating: false,
        
        init: function() {
            this.container = document.querySelector('.phone-carousel');
            if (!this.container) return;
            
            this.images = this.container.querySelectorAll('.phone-screenshot');
            if (this.images.length === 0) return;
            
            // Set up initial state
            this.images.forEach((img, index) => {
                img.classList.remove('active', 'prev');
                if (index === 0) {
                    img.classList.add('active');
                }
            });
            
            this.startAutoplay();
            this.setupVisibilityListener();
            
            console.log(`✅ Phone mockup carousel initialized with ${this.images.length} images`);
        },
        
        nextSlide: function() {
            if (this.isAnimating || this.images.length === 0) return;
            
            this.isAnimating = true;
            
            // Remove active class from current image
            this.images[this.currentIndex].classList.remove('active');
            this.images[this.currentIndex].classList.add('prev');
            
            // Move to next image (circular)
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            
            // Add active class to next image
            this.images[this.currentIndex].classList.add('active');
            this.images[this.currentIndex].classList.remove('prev');
            
            // Clean up after animation
            setTimeout(() => {
                this.images.forEach((img, index) => {
                    if (index !== this.currentIndex) {
                        img.classList.remove('prev');
                    }
                });
                this.isAnimating = false;
            }, 600); // Match CSS transition duration
        },
        
        startAutoplay: function() {
            if (this.autoplayInterval) return; // Already running
            
            this.autoplayInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoplayDelay);
            
            console.log('✅ Phone mockup autoplay started');
        },
        
        stopAutoplay: function() {
            if (this.autoplayInterval) {
                clearInterval(this.autoplayInterval);
                this.autoplayInterval = null;
                console.log('⏸️ Phone mockup autoplay stopped');
            }
        },
        
        setupVisibilityListener: function() {
            // Pause/resume autoplay when tab visibility changes
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.stopAutoplay();
                } else {
                    this.startAutoplay();
                }
            });
        }
    };
    
    // ===== FEATURE GALLERY FUNCTIONALITY =====
    const FeatureGallery = {
        galleries: [],
        
        init: function() {
            const galleryContainers = document.querySelectorAll('.gallery-container');
            if (!galleryContainers.length) return;
            
            galleryContainers.forEach((container, index) => {
                this.setupGallery(container, index);
            });
            
            console.log(`✅ ${galleryContainers.length} feature galleries initialized`);
        },
        
        setupGallery: function(container, index) {
            const track = container.querySelector('.gallery-track');
            const items = container.querySelectorAll('.gallery-item');
            const prevBtn = container.querySelector('.gallery-btn.prev');
            const nextBtn = container.querySelector('.gallery-btn.next');
            const indicators = container.querySelectorAll('.indicator');
            
            if (!track || !items.length) return;
            
            const gallery = {
                container,
                track,
                items,
                prevBtn,
                nextBtn,
                indicators,
                currentIndex: 0,
                totalItems: items.length,
                isAnimating: false
            };
            
            this.galleries[index] = gallery;
            
            // Bind event handlers
            if (prevBtn) {
                prevBtn.addEventListener('click', () => this.prevSlide(index));
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => this.nextSlide(index));
            }
            
            // Indicator clicks
            indicators.forEach((indicator, indicatorIndex) => {
                indicator.addEventListener('click', () => this.goToSlide(index, indicatorIndex));
            });
            
            // Touch support for mobile
            this.setupTouchEvents(gallery, index);
            
            // Keyboard navigation
            container.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prevSlide(index);
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextSlide(index);
                }
            });
            
            // Initial update
            this.updateGallery(index);
        },
        
        setupTouchEvents: function(gallery, index) {
            let touchStartX = 0;
            let touchStartY = 0;
            let touchEndX = 0;
            let touchEndY = 0;
            const minSwipeDistance = 50;
            
            gallery.container.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            gallery.container.addEventListener('touchmove', (e) => {
                // Prevent scrolling when swiping horizontally
                const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
                const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
                
                if (deltaX > deltaY && deltaX > 10) {
                    e.preventDefault();
                }
            }, { passive: false });
            
            gallery.container.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].clientX;
                touchEndY = e.changedTouches[0].clientY;
                
                const deltaX = touchStartX - touchEndX;
                const deltaY = Math.abs(touchStartY - touchEndY);
                
                // Only process horizontal swipes
                if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > deltaY) {
                    if (deltaX > 0) {
                        this.nextSlide(index);
                    } else {
                        this.prevSlide(index);
                    }
                }
            }, { passive: true });
        },
        
        prevSlide: function(galleryIndex) {
            const gallery = this.galleries[galleryIndex];
            if (!gallery || gallery.isAnimating) return;
            
            gallery.currentIndex = gallery.currentIndex > 0 ? gallery.currentIndex - 1 : gallery.totalItems - 1;
            this.updateGallery(galleryIndex);
        },
        
        nextSlide: function(galleryIndex) {
            const gallery = this.galleries[galleryIndex];
            if (!gallery || gallery.isAnimating) return;
            
            gallery.currentIndex = gallery.currentIndex < gallery.totalItems - 1 ? gallery.currentIndex + 1 : 0;
            this.updateGallery(galleryIndex);
        },
        
        goToSlide: function(galleryIndex, slideIndex) {
            const gallery = this.galleries[galleryIndex];
            if (!gallery || gallery.isAnimating || slideIndex === gallery.currentIndex) return;
            
            gallery.currentIndex = slideIndex;
            this.updateGallery(galleryIndex);
        },
        
        updateGallery: function(galleryIndex) {
            const gallery = this.galleries[galleryIndex];
            if (!gallery) return;
            
            gallery.isAnimating = true;
            
            // Update track position
            const translateX = -gallery.currentIndex * 100;
            gallery.track.style.transform = `translateX(${translateX}%)`;
            
            // Update indicators
            if (gallery.indicators) {
                gallery.indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === gallery.currentIndex);
                });
            }
            
            // Update button states - keep buttons always enabled for circular navigation
            if (gallery.prevBtn) {
                gallery.prevBtn.disabled = false;
            }
            
            if (gallery.nextBtn) {
                gallery.nextBtn.disabled = false;
            }
            
            // Reset animation flag after transition
            setTimeout(() => {
                gallery.isAnimating = false;
            }, 300);
        }
    };

    // ===== MAIN INITIALIZATION =====
    const ExchangoApp = {
        initialized: false,
        
        init: function() {
            if (this.initialized) return;
            
            try {
                // Initialize all modules
                BackToTop.init();
                ScrollAnimations.init();
                SmoothNavigation.init();
                LanguageSwitcher.init();
                LazyLoader.init();
                PerformanceMonitor.init();
                AccessibilityEnhancer.init();
                MobileOptimizer.init();
                FeatureGallery.init();
                PhoneMockupCarousel.init();
                
                this.setupGlobalEventHandlers();
                this.initialized = true;
                
                console.log('🎉 Exchango index page fully initialized!');
                
                // Announce to screen reader
                if (window.announceToScreenReader) {
                    window.announceToScreenReader('Exchango app page loaded successfully');
                }
                
            } catch (error) {
                console.error('❌ Error initializing Exchango app:', error);
            }
        },
        
        setupGlobalEventHandlers: function() {
            // Handle window resize
            window.addEventListener('resize', utils.debounce(() => {
                // Re-detect mobile on resize
                MobileOptimizer.detectMobile();
            }, CONFIG.debounceDelay));
            
            // Handle page visibility changes
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    // Page is hidden - pause non-essential animations
                    ScrollAnimations.destroy();
                } else {
                    // Page is visible - resume animations
                    if (CONFIG.features.scrollAnimations && !utils.prefersReducedMotion()) {
                        ScrollAnimations.init();
                    }
                }
            });
        },
        
        // Public API for external scripts
        getPerformanceMetrics: function() {
            return PerformanceMonitor.getMetrics();
        },
        
        scrollToSection: function(sectionId) {
            SmoothNavigation.scrollToSection(document.getElementById(sectionId));
        },
        
        announceToScreenReader: function(message) {
            if (window.announceToScreenReader) {
                window.announceToScreenReader(message);
            }
        }
    };
    
    // ===== AUTO-INITIALIZATION =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            ExchangoApp.init();
        });
    } else {
        ExchangoApp.init();
    }
    
    // Export to global scope for debugging
    window.ExchangoApp = ExchangoApp;
    
    console.log('📜 Exchango index scripts loaded');
    
})();