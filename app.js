document.addEventListener('DOMContentLoaded', () => {

    const languageSelector = document.getElementById('language-selector');

    // The function that switches the language
    const switchLanguage = (lang) => {
        // Loop through all the keys in our language dictionary
        for (const key in languages[lang]) {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = languages[lang][key];
            }
        }
        // Save user's choice to local storage
        localStorage.setItem('language', lang);
    };

    // Add click event listeners to the buttons
    languageSelector.addEventListener('click', (event) => {
        const selectedLang = event.target.closest('button')?.dataset.lang;
        if (selectedLang) {
            switchLanguage(selectedLang);
        }
    });

    // Check if a language is saved in local storage, otherwise default to Chinese
    const savedLang = localStorage.getItem('language') || 'zh';
    switchLanguage(savedLang);

});
