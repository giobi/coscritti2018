// Auth token (SHA256 hash)
const VALID_TOKEN = '8c121210dde619fb32da41bdb2ffbc1ff51ca4558705f00351318eb5cd783195';
const COOKIE_NAME = 'coscritti_auth';
const COOKIE_DAYS = 30;

// Cookie helpers
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Strict";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Check authentication
function checkAuth() {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    // If token in URL, validate and set cookie
    if (token) {
        if (token === VALID_TOKEN) {
            setCookie(COOKIE_NAME, 'authenticated', COOKIE_DAYS);
            // Redirect to clean URL (remove token from history)
            window.location.replace(window.location.pathname);
            return;
        } else {
            // Invalid token - redirect to gate
            window.location.replace('/gate.html');
            return;
        }
    }
    
    // Check if cookie exists
    const authCookie = getCookie(COOKIE_NAME);
    if (!authCookie || authCookie !== 'authenticated') {
        // Not authenticated - redirect to gate
        window.location.replace('/gate.html');
    }
}

// Run auth check immediately (but not on gate.html)
if (!window.location.pathname.includes('gate.html')) {
    checkAuth();
}
