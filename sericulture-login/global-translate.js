let currentLanguage = localStorage.getItem('appLanguage') || 'en';

const translationData = {
    "Platform Settings": "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "Language Preferences": "ಭಾಷೆಯ ಆದ್ಯತೆಗಳು",
    "Choose your preferred language for the platform": "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಾಗಿ ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    "English (Default)": "ಇಂಗ್ಲೀಷ್ (ಡೀಫಾಲ್ಟ್)",
    "ಕನ್ನಡ (Kannada)": "ಕನ್ನಡ (Kannada)",
    "Main Menu": "ಮುಖ್ಯ ಮೆನು",
    "Dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    "Daily Log": "ದೈನಂದಿನ ಲಾಗ್",
    "Smart Farm": "ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮ್",
    "Crop Calendar": "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್",
    "Weather Advisor": "ಹವಾಮಾನ ಸಲಹೆಗಾರ",
    "Silk Exchange": "ರೇಷ್ಮೆ ವಿನಿಮಯ",
    "Other Features": "ಇತರ ವೈಶಿಷ್ಟ್ಯಗಳು",
    "Cocoon Grading": "ಗೂಡು ಶ್ರೇಣೀಕರಣ",
    "Daily News": "ದೈನಂದಿನ ಸುದ್ದಿ",
    "Insights": "ಒಳನೋಟಗಳು",
    "Scheme Engine": "ಯೋಜನೆ ಎಂಜಿನ್",
    "Logout": "ಲಾಗ್ ಔಟ್",
    "Settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "Edit Profile": "ಪ್ರೊಫೈಲ್ ಸಂಪಾದಿಸಿ",
    "Mysuru District, Karnataka": "ಮೈಸೂರು ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ",
    "Here is your farm's performance overview for today.": "ಇಂದು ನಿಮ್ಮ ಫಾರ್ಮ್‌ನ ಕಾರ್ಯಕ್ಷಮತೆಯ ಅವಲೋಕನ ಇಲ್ಲಿದೆ.",
    "Active Cycle: Batch #402": "ಸಕ್ರಿಯ ಚಕ್ರ: ಬ್ಯಾಚ್ #402",
    "4th Instar Stage": "4 ನೇ ಹಂತ",
    "The silkworms are rapidly growing. Peak feeding phase is active. Ensure temperature remains below 30°C.": "ರೇಷ್ಮೆ ಹುಳುಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿವೆ. ಗರಿಷ್ಠ ಆಹಾರ ಹಂತವು ಸಕ್ರಿಯವಾಗಿದೆ. ತಾಪಮಾನವು 30°C ಗಿಂತ ಕಡಿಮೆಯಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
    "Cycle Progress": "ಚಕ್ರದ ಪ್ರಗತಿ",
    "Day 14": "ದಿನ 14",
    "Egg Hatching": "ಮೊಟ್ಟೆ ಒಡೆಯುವಿಕೆ",
    "Spinning": "ನೂಲುವಿಕೆ",
    "Leaf Consumption": "ಎಲೆಗಳ ಬಳಕೆ",
    "kg": "ಕೆಜಿ",
    "+15% from yesterday": "ನಿನ್ನೆಗಿಂತ +15%",
    "Est. Yield": "ಅಂದಾಜು ಇಳುವರಿ",
    "kg/100 dfls": "ಕೆಜಿ/100 ಮೊಟ್ಟೆಗಳು",
    "Above average": "ಸರಾಸರಿಗಿಂತ ಹೆಚ್ಚು",
    "Bed Health": "ಹಾಸಿಗೆಯ ಆರೋಗ್ಯ",
    "Optimal": "ಸೂಕ್ತ",
    "No anomalies detected": "ಯಾವುದೇ ದೋಷಗಳು ಕಂಡುಬಂದಿಲ್ಲ",
    "Market Rate (Bivoltine)": "ಮಾರುಕಟ್ಟೆ ದರ (ಬೈವೋಲ್ಟಿನ್)",
    "₹450": "₹೪೫೦",
    "/kg": "/ಕೆಜಿ",
    "-₹10 since morning": "ಬೆಳಿಗ್ಗೆಯಿಂದ -₹10",
    "Growth & Feeding Trend": "ಬೆಳವಣಿಗೆ ಮತ್ತು ಆಹಾರ ಪ್ರವೃತ್ತಿ",
    "Correlation between leaf feed and larval weight": "ಎಲೆಗಳ ಆಹಾರ ಮತ್ತು ಲಾರ್ವಾ ತೂಕದ ನಡುವಿನ ಸಂಬಂಧ",
    "Today's Protocol": "ಇಂದಿನ ಪ್ರೋಟೋಕಾಲ್",
    "Morning Bed Cleaning": "ಬೆಳಗಿನ ಹಾಸಿಗೆ ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ",
    "Completed at 06:30 AM": "ಬೆಳಿಗ್ಗೆ 06:30 ಕ್ಕೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
    "Shoot Feeding (2nd Dose)": "ಕಾಂಡದ ಆಹಾರ (2 ನೇ ಡೋಸ್)",
    "Scheduled for 11:00 AM": "ಬೆಳಿಗ್ಗೆ 11:00 ಕ್ಕೆ ನಿಗದಿಯಾಗಿದೆ",
    "Dust Bed Disinfectant (Vijetha)": "ಹಾಸಿಗೆ ಸೋಂಕುನಿವಾರಕ (ವಿಜೇತ)",
    "Crucial for 4th Instar": "4 ನೇ ಹಂತಕ್ಕೆ ನಿರ್ಣಾಯಕ",
    "Record Room Temp": "ಕೊಠಡಿಯ ತಾಪಮಾನ ದಾಖಲಿಸಿ",
    "Due at 02:00 PM": "ಮಧ್ಯಾಹ್ನ 02:00 ಕ್ಕೆ ಬಾಕಿ ಇದೆ",
    "Welcome back,": "ಮತ್ತೆ ಸ್ವಾಗತ,",
    "Enter your credentials to access the Sericulture platform.": "ರೇಷ್ಮೆಗಾರಿಕೆ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಪ್ರವೇಶಿಸಲು ನಿಮ್ಮ ರುಜುವಾತುಗಳನ್ನು ನಮೂದಿಸಿ.",
    "Phone Number": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
    "Enter your phone number": "ನಿಮ್ಮ ದೂರವಾಣಿ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
    "Password": "ಪಾಸ್‌ವರ್ಡ್",
    "Enter your password": "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
    "Remember me": "ನನ್ನನ್ನು ನೆನಪಿಡಿ",
    "Forgot password?": "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರುವಿರಾ?",
    "Login to Dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
    "Don't have an account?": "ಖಾತೆ ಇಲ್ಲವೇ?",
    "Sign up now": "ಈಗ ಸೈನ್ ಅಪ್ ಮಾಡಿ",
    "Are you an Admin or Manager?": "ನೀವು ನಿರ್ವಾಹಕರು ಅಥವಾ ವ್ಯವಸ್ಥಾಪಕರಾಗಿದ್ದೀರಾ?",
    "Login here": "ಇಲ್ಲಿ ಲಾಗಿನ್ ಮಾಡಿ",
    "Create Farmer Account": "ರೈತರ ಖಾತೆಯನ್ನು ರಚಿಸಿ",
    "Register to access the Sericulture platform.": "ರೇಷ್ಮೆಗಾರಿಕೆ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಪ್ರವೇಶಿಸಲು ನೋಂದಾಯಿಸಿ.",
    "Full Name": "ಪೂರ್ಣ ಹೆಸರು",
    "Enter your full name": "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    "Create Password": "ಪಾಸ್‌ವರ್ಡ್ ರಚಿಸಿ",
    "Confirm Password": "ಪಾಸ್‌ವರ್ಡ್ ಖಚಿತಪಡಿಸಿ",
    "Already have an account?": "ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?",
    "SeriFusion": "ಸೆರಿಫ್ಯೂಷನ್",
    "Current Batch": "ಪ್ರಸ್ತುತ ಬ್ಯಾಚ್",
    "Previous Batch": "ಹಿಂದಿನ ಬ್ಯಾಚ್",
    "Log Data": "ಡೇಟಾ ಲಾಗ್ ಮಾಡಿ",
    "Update Daily Farm Data": "ದೈನಂದಿನ ಫಾರ್ಮ್ ಡೇಟಾ ನವೀಕರಿಸಿ",
    "Record today's parameters to keep your AI predictions accurate.": "ನಿಮ್ಮ AI ಮುನ್ನೋಟಗಳನ್ನು ನಿಖರವಾಗಿಡಲು ಇಂದಿನ ನಿಯತಾಂಕಗಳನ್ನು ದಾಖಲಿಸಿ.",
    "Temperature (°C)": "ತಾಪಮಾನ (°C)",
    "Humidity (%)": "ಆರ್ದ್ರತೆ (%)",
    "Save Daily Log": "ದೈನಂದಿನ ಲಾಗ್ ಉಳಿಸಿ",
    "AI Farm Assistant": "AI ಫಾರ್ಮ್ ಸಹಾಯಕ",
    "Ask anything about your silkworms or mulberry crop.": "ನಿಮ್ಮ ರೇಷ್ಮೆ ಹುಳುಗಳು ಅಥವಾ ಹಿಪ್ಪುನೇರಳೆ ಬೆಳೆಯ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ.",
    "Type your question here...": "ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...",
    "Ask Assistant": "ಸಹಾಯಕನನ್ನು ಕೇಳಿ",
    "Smart Farm Overview": "ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮ್ ಅವಲೋಕನ",
    "Crop Calendar & Scheduler": "ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್ ಮತ್ತು ವೇಳಾಪಟ್ಟಿ",
    "Weather Advisory & Forecasting": "ಹವಾಮಾನ ಸಲಹೆ ಮತ್ತು ಮುನ್ಸೂಚನೆ",
    "Silk Exchange & Market Prices": "ರೇಷ್ಮೆ ವಿನಿಮಯ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
    "Live Cocoon Grading (AI)": "ಲೈವ್ ಗೂಡು ಶ್ರೇಣೀಕರಣ (AI)",
    "Daily Sericulture News": "ದೈನಂದಿನ ರೇಷ್ಮೆಗಾರಿಕೆ ಸುದ್ದಿ",
    "Business Insights": "ವ್ಯಾಪಾರ ಒಳನೋಟಗಳು",
    "Scheme & Subsidy Engine": "ಯೋಜನೆ ಮತ್ತು ಸಬ್ಸಿಡಿ ಎಂಜಿನ್",
    "Personal Details": "ವೈಯಕ್ತಿಕ ವಿವರಗಳು",
    "Save Changes": "ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
    "Cancel": "ರದ್ದುಮಾಡಿ",
    "Edit Profile & Preferences": "ಪ್ರೊಫೈಲ್ ಮತ್ತು ಆದ್ಯತೆಗಳನ್ನು ಸಂಪಾದಿಸಿ",
    "Soil Temp": "ಮಣ್ಣಿನ ತಾಪಮಾನ",
    "Stable": "ಸ್ಥಿರ",
    "Soil Moisture": "ಮಣ್ಣಿನ ತೇವಾಂಶ",
    "Optimal level": "ಸೂಕ್ತ ಮಟ್ಟ",
    "Silk Market Price Chart": "ರೇಷ್ಮೆ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಪಟ್ಟಿ",
    "Price variation over the last week": "ಕಳೆದ ವಾರದಲ್ಲಿ ಬೆಲೆ ಬದಲಾವಣೆ",
    "This Week": "ಈ ವಾರ",
    "Last Week": "ಕಳೆದ ವಾರ"
};

function translateDOM(node) {
    if (node.nodeType === Node.TEXT_NODE) {
        let text = node.nodeValue.trim();
        if (text.length > 0) {
            // Save original text if not already saved
            if (node.originalText === undefined) {
                node.originalText = node.nodeValue;
            }
            
            let trimmedOriginal = node.originalText.trim();
            if (currentLanguage === 'kn' && translationData[trimmedOriginal]) {
                node.nodeValue = node.originalText.replace(trimmedOriginal, translationData[trimmedOriginal]);
            } else if (currentLanguage === 'en') {
                node.nodeValue = node.originalText;
            }
        }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName.toLowerCase();
        if (tag !== 'script' && tag !== 'style' && tag !== 'noscript') {
            // Translate placeholders
            if (node.hasAttribute('placeholder')) {
                if (node.originalPlaceholder === undefined) {
                    node.originalPlaceholder = node.getAttribute('placeholder');
                }
                let original = node.originalPlaceholder.trim();
                if (currentLanguage === 'kn' && translationData[original]) {
                    node.setAttribute('placeholder', translationData[original]);
                } else if (currentLanguage === 'en') {
                    node.setAttribute('placeholder', node.originalPlaceholder);
                }
            }
            
            // Translate value of inputs of type button or submit
            if (tag === 'input' && (node.type === 'button' || node.type === 'submit')) {
                 if (node.originalValue === undefined) {
                     node.originalValue = node.value;
                 }
                 let original = node.originalValue.trim();
                 if (currentLanguage === 'kn' && translationData[original]) {
                     node.value = translationData[original];
                 } else if (currentLanguage === 'en') {
                     node.value = node.originalValue;
                 }
            }

            // Iterate over child nodes
            for (let i = 0; i < node.childNodes.length; i++) {
                translateDOM(node.childNodes[i]);
            }
        }
    }
}

function applyTranslation() {
    translateDOM(document.body);
    
    // Update active radio in settings if present
    const knRadio = document.querySelector('input[value="kn"]');
    const enRadio = document.querySelector('input[value="en"]');
    if (knRadio && enRadio) {
        if (currentLanguage === 'kn') {
            knRadio.checked = true;
        } else {
            enRadio.checked = true;
        }
    }
}

function translateToKannada() {
    currentLanguage = 'kn';
    localStorage.setItem('appLanguage', 'kn');
    applyTranslation();
}

function translateToEnglish() {
    currentLanguage = 'en';
    localStorage.setItem('appLanguage', 'en');
    applyTranslation();
}

// Initial setup
document.addEventListener("DOMContentLoaded", () => {
    // Migration from old settings
    const pref = localStorage.getItem('translateToKannada');
    if (pref === 'true') {
        currentLanguage = 'kn';
        localStorage.setItem('appLanguage', 'kn');
        localStorage.removeItem('translateToKannada');
    } else if (pref === 'false') {
        currentLanguage = 'en';
        localStorage.setItem('appLanguage', 'en');
        localStorage.removeItem('translateToKannada');
    }

    applyTranslation();

    // --- Floating Back Button Logic ---
    const excludedPages = ['index.html', 'farmer-home.html', 'farmer-login.html', 'create-account.html', 'farmer-create-account.html', ''];
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    
    if (!excludedPages.includes(currentPage) && !currentPage.startsWith('index')) {
        const backBtn = document.createElement('a');
        // If there is history, go back. Otherwise go to dashboard.
        backBtn.onclick = (e) => {
            e.preventDefault();
            if (window.history.length > 2) {
                window.history.back();
            } else {
                window.location.href = 'farmer-home.html';
            }
        };
        backBtn.href = 'farmer-home.html'; // Fallback
        backBtn.innerHTML = `
            <div style="position: fixed; bottom: 30px; left: 30px; width: 56px; height: 56px; background: linear-gradient(135deg, #576341 0%, #3c4727 100%); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(87, 99, 65, 0.4); z-index: 9999; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="transform: translateX(-1px);">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </div>
        `;
        
        // Add hover effects
        const btnInner = backBtn.firstElementChild;
        backBtn.addEventListener('mouseenter', () => {
            btnInner.style.transform = 'translateY(-4px)';
            btnInner.style.boxShadow = '0 12px 28px rgba(87, 99, 65, 0.6)';
        });
        backBtn.addEventListener('mouseleave', () => {
            btnInner.style.transform = 'translateY(0)';
            btnInner.style.boxShadow = '0 8px 24px rgba(87, 99, 65, 0.4)';
        });
        
        document.body.appendChild(backBtn);
    }
});
