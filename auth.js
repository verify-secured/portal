// Inactivity timeout settings
const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds
let inactivityTimer;

// Reset inactivity timer
function resetInactivityTimer() {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(handleInactivity, INACTIVITY_TIMEOUT);
}

// Handle inactivity - logout and redirect
function handleInactivity() {
  sessionStorage.removeItem('authenticated');
  sessionStorage.removeItem('lastActivity');
  window.location.href = 'login.html';
}

// Initialize inactivity tracking
function initInactivityTracking() {
  // Check if user is authenticated
  if (sessionStorage.getItem('authenticated') !== 'true') {
    window.location.href = 'login.html';
    return;
  }

  // Set initial timer
  resetInactivityTimer();

  // Activity events to reset timer
  const activityEvents = [
    'mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click', 'keydown'
  ];

  activityEvents.forEach(event => {
    document.addEventListener(event, resetInactivityTimer);
  });

  // Store last activity timestamp
  const now = Date.now();
  const lastActivity = sessionStorage.getItem('lastActivity');
  
  if (lastActivity) {
    const timeSinceLastActivity = now - parseInt(lastActivity);
    if (timeSinceLastActivity > INACTIVITY_TIMEOUT) {
      handleInactivity();
      return;
    }
  }
  
  sessionStorage.setItem('lastActivity', now.toString());
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initInactivityTracking);
