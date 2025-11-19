console.log('v191125')

// App Store URLs
const APP_STORE_URL = 'https://apps.apple.com/app/id6752467916';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.exchango';

// Auto-redirect delay (milliseconds)
const REDIRECT_DELAY = 3000;

// Fallback UI display delay (milliseconds)
const FALLBACK_DELAY = 5000;

// SessionStorage key for tracking redirect
const REDIRECT_KEY = 'exchango_redirect_attempted';

/**
 * Detect user's platform (iOS, Android, or Desktop)
 */
function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'ios';
    }

    // Android detection
    if (/android/i.test(userAgent)) {
        return 'android';
    }

    // Desktop or unknown
    return 'desktop';
}

/**
 * Get appropriate store URL based on platform
 */
function getStoreUrl(platform) {
    switch (platform) {
        case 'ios':
            return APP_STORE_URL;
        case 'android':
            return PLAY_STORE_URL;
        default:
            // Default to iOS for desktop users
            return APP_STORE_URL;
    }
}

/**
 * Check if redirect has already been attempted in this session
 */
function hasRedirectAttempted() {
    return sessionStorage.getItem(REDIRECT_KEY) === 'true';
}

/**
 * Mark redirect as attempted in sessionStorage
 */
function markRedirectAttempted() {
    sessionStorage.setItem(REDIRECT_KEY, 'true');
}

/**
 * Perform automatic redirect to app store (only once per browser session)
 */
function autoRedirect() {
    const platform = detectPlatform();
    const storeUrl = getStoreUrl(platform);

    // Set download button URLs for fallback
    const downloadButtonIOS = document.getElementById('download-button-ios');
    const downloadButtonAndroid = document.getElementById('download-button-android');
    if (downloadButtonIOS) {
        downloadButtonIOS.href = APP_STORE_URL;
    }
    if (downloadButtonAndroid) {
        downloadButtonAndroid.href = PLAY_STORE_URL;
    }

    // Check if redirect has already been attempted in this session
    if (hasRedirectAttempted()) {
        console.log('Redirect already attempted in this session. Showing manual download options.');
        showFallbackUI();
        return;
    }

    // Mark as attempted before redirecting
    markRedirectAttempted();

    // Attempt automatic redirect after delay
    setTimeout(() => {
        // For iOS, try different approach
        if (platform === 'ios') {
            // Create a temporary link and click it
            const link = document.createElement('a');
            link.href = storeUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            // For Android and Desktop, use standard redirect
            window.location.href = storeUrl;
        }
    }, REDIRECT_DELAY);

    // Show fallback UI if redirect doesn't work
    setTimeout(() => {
        showFallbackUI();
    }, FALLBACK_DELAY);
}

/**
 * Show fallback UI with manual download button
 */
function showFallbackUI() {
    const loadingState = document.getElementById('loading-state');
    const fallbackState = document.getElementById('fallback-state');

    if (loadingState && fallbackState) {
        loadingState.classList.add('hidden');
        fallbackState.classList.remove('hidden');
    }
}

/**
 * Update UI text based on detected platform and language
 * Note: This function is now deprecated as we use the translation system
 * from download-translations.js which handles all i18n automatically
 */
function updateUIText() {
    // Translation system from download-translations.js handles all text updates
    // This function is kept for compatibility but does nothing
    console.log('UI text is managed by download-translations.js');
}

/**
 * Track page visibility to prevent redirect on background tabs
 */
function handleVisibilityChange() {
    if (document.hidden) {
        // User switched tabs, don't redirect
        console.log('Page is hidden, skipping auto-redirect');
    }
}

/**
 * Initialize the download page
 */
function init() {
    // Update UI text based on platform
    updateUIText();

    // Listen for visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start auto-redirect if page is visible
    if (!document.hidden) {
        autoRedirect();
    } else {
        // If page loaded in background, show fallback immediately
        showFallbackUI();
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
