// Function to display the modal
function showModal() {
    const modal = document.getElementById('cookie-modal');
    modal.classList.add('show');
}

// Function to close the modal and set a flag in localStorage
function closeModal() {
    const modal = document.getElementById('cookie-modal');
    modal.classList.remove('show');
    localStorage.setItem('cookieConsent', 'true'); // Set a flag in localStorage
}

// Check localStorage on page load
window.onload = function() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        showModal(); // Show the modal only if consent hasn't been given
    }
};
