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
 * Update UI text based on detected platform
 */
function updateUIText() {
    const platform = detectPlatform();
    const loadingText = document.querySelector('.loading-text');
    const buttonText = document.querySelector('.button-text');

    if (loadingText) {
        switch (platform) {
            case 'ios':
                loadingText.textContent = 'App Store로 이동 중...';
                break;
            case 'android':
                loadingText.textContent = 'Google Play로 이동 중...';
                break;
            default:
                loadingText.textContent = '앱 스토어로 이동 중...';
        }
    }

    if (buttonText) {
        switch (platform) {
            case 'ios':
                buttonText.textContent = 'App Store에서 다운로드';
                break;
            case 'android':
                buttonText.textContent = 'Google Play에서 다운로드';
                break;
            default:
                buttonText.textContent = '앱 다운로드';
        }
    }
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
