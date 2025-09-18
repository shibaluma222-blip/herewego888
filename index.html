// --- Language Switching ---
const languageSelector = document.getElementById('language-selector');

const setLanguage = (lang) => {
    localStorage.setItem('language', lang);
    updateTextContent(lang);
};

const updateTextContent = (lang) => {
    if (!window.languages || !window.languages[lang]) {
        console.warn(`Language pack for '${lang}' not found.`);
        return;
    }
    const langPack = window.languages[lang];
    Object.keys(langPack).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            // Handle specific cases like input placeholders or button text
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = langPack[key];
            } else if (key === 'speed-setting-title' && document.getElementById('speed-slider')) {
                // Special handler for counting trainer speed label
                const speed = parseFloat(document.getElementById('speed-slider').value);
                element.textContent = langPack[key].replace('{0}', speed.toFixed(1));
            }
            else {
                element.innerHTML = langPack[key]; // Using innerHTML to support potential HTML tags in translations
            }
        }
        // Also update mobile menu elements if they exist
        const mobileElement = document.getElementById(`mobile-${key}`);
        if (mobileElement) {
            mobileElement.innerHTML = langPack[key];
        }
    });
    // Update active button style
    document.querySelectorAll('#language-selector button').forEach(btn => {
        btn.classList.toggle('ring-2', btn.dataset.lang === lang);
        btn.classList.toggle('ring-yellow-400', btn.dataset.lang === lang);
    });
};

if (languageSelector) {
    languageSelector.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (button && button.dataset.lang) {
            setLanguage(button.dataset.lang);
        }
    });
}


// Load language on initial page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'zh';
    setLanguage(savedLang);

    // --- Desktop Dropdown Menu Logic ---
    const toolsToggle = document.getElementById('nav-tools-toggle');
    const toolsDropdown = document.getElementById('nav-tools-dropdown');

    if (toolsToggle && toolsDropdown) {
        toolsToggle.addEventListener('click', (event) => {
            event.stopPropagation(); 
            toolsDropdown.classList.toggle('hidden');
        });

        window.addEventListener('click', (event) => {
            if (!toolsDropdown.classList.contains('hidden') && !toolsToggle.contains(event.target)) {
                toolsDropdown.classList.add('hidden');
            }
        });
    }

    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const mobileToolsToggle = document.getElementById('mobile-nav-tools-toggle');
    const mobileToolsDropdown = document.getElementById('mobile-nav-tools-dropdown');

    if (mobileToolsToggle && mobileToolsDropdown) {
        mobileToolsToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            mobileToolsDropdown.classList.toggle('hidden');
        });
    }

});

