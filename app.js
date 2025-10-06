document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation ---
    const navToolsToggle = document.getElementById('nav-tools-toggle');
    const navToolsDropdown = document.getElementById('nav-tools-dropdown');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavToolsToggle = document.getElementById('mobile-nav-tools-toggle');
    const mobileNavToolsDropdown = document.getElementById('mobile-nav-tools-dropdown');

    if (navToolsToggle) {
        navToolsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navToolsDropdown.classList.toggle('hidden');
        });
    }
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (mobileNavToolsToggle) {
        mobileNavToolsToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileNavToolsDropdown.classList.toggle('hidden');
        });
    }

    document.addEventListener('click', (e) => {
        if (navToolsDropdown && !navToolsDropdown.classList.contains('hidden') && !navToolsToggle.contains(e.target)) {
            navToolsDropdown.classList.add('hidden');
        }
    });

    // --- Language Switcher ---
    const languageSelectorDesktop = document.querySelector('.hidden.md\\:flex #language-selector');
    const languageSelectorMobile = document.getElementById('mobile-menu'); // Assuming buttons are inside mobile menu, might need a more specific selector
    let currentLang = localStorage.getItem('language') || 'zh';

    const updateLanguageButtonStyles = () => {
        const allButtons = document.querySelectorAll('[data-lang]');
        allButtons.forEach(button => {
            if (button.dataset.lang === currentLang) {
                button.classList.remove('opacity-75');
                button.classList.add('opacity-100', 'ring-2', 'ring-yellow-400');
            } else {
                button.classList.add('opacity-75');
                button.classList.remove('opacity-100', 'ring-2', 'ring-yellow-400');
            }
        });
    };
    
    const setLanguage = (lang) => {
        if (!lang || !translations[lang]) return;

        currentLang = lang;
        localStorage.setItem('language', lang);
        const translationData = translations[lang];

        // Iterate over translation keys and update elements by ID
        for (const key in translationData) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translationData[key];
            }
        }
        
        updateLanguageButtonStyles();
    };

    const handleLanguageChange = (e) => {
        const langButton = e.target.closest('button[data-lang]');
        if (langButton) {
            const lang = langButton.dataset.lang;
            setLanguage(lang);
        }
    };
    
    if(languageSelectorDesktop) {
        languageSelectorDesktop.addEventListener('click', handleLanguageChange);
    }
    if(languageSelectorMobile) {
        // This is a broader listener, but will work if buttons are added to mobile menu
        // For a more robust solution, add a specific mobile language selector container
    }

    // Initial load
    setLanguage(currentLang);
});

