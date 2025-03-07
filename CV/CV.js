document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    
    if (isDarkMode) {
        body.classList.add('dark');
        toggleButton.querySelector('img').src = 'icons/dark.png'; 
    }

    
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark');

        
        if (body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.querySelector('img').src = 'icons/dark.png'; 
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.querySelector('img').src = 'icons/light.png'; 
        }
    });
});