// Inject Google Translate element and script into the document
document.addEventListener("DOMContentLoaded", () => {
    // Inject the translate div hidden from view
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';
    translateDiv.style.display = 'none';
    document.body.appendChild(translateDiv);

    // Inject the Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    // After a short delay, check if we need to auto-translate to Kannada
    if(localStorage.getItem('translateToKannada') === 'true') {
        setTimeout(translateToKannada, 1500);
        setTimeout(translateToKannada, 3000); // Retry in case script loads slow
    }
});

// Global initialization function required by Google Translate
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,kn',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
};

function translateToKannada() {
    // Programmatically select Kannada in the hidden Google Translate dropdown
    const select = document.querySelector('.goog-te-combo');
    if (select && select.value !== 'kn') {
        select.value = 'kn';
        select.dispatchEvent(new Event('change'));
    }
}

function translateToEnglish() {
    // Programmatically select English
    const select = document.querySelector('.goog-te-combo');
    if (select) {
        select.value = 'en';
        select.dispatchEvent(new Event('change'));
    }
    
    // Clear cookies
    document.cookie = "googtrans=/en/en; path=/; domain=" + window.location.hostname;
    document.cookie = "googtrans=/en/en; path=/;";
}
