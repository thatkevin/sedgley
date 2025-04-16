/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

// Self-executing function to ensure code runs immediately
(function() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeRotation);
    } else {
        initializeRotation();
    }
    
    function initializeRotation() {
        const entityText = document.getElementById('entity-text');
        const actionText = document.getElementById('action-text');
        
        // Check if elements exist
        if (!entityText || !actionText) {
            console.error('Required elements not found!');
            return;
        }
        
        const entities = [
        'business',
        'charity',
        'startup',
        'organisation',
        'non-profit',
        'school',
        'community',
        'event',
        'music venue',
        'small business'
    ];
    
    const actions = [
        'Build software',
        'Get online',
        'Make an app',
        'Find a dev',
        'Create tools',
        'Automate processes',
        'Digitise workflows'
    ];
    
    let entityIndex = 0;
    let actionIndex = 0;
    let rotationInterval = null;
    let isPaused = false;
    
    // Create and append style for transitions
    const style = document.createElement('style');
    style.textContent = `
        #entity-text, #action-text {
            transition: opacity 0.5s ease-in-out;
        }
        .fade-out {
            opacity: 0;
        }
        .fade-in {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    
    function updateTexts() {
        if (isPaused) return;
        
        // Fade out
        entityText.classList.add('fade-out');
        actionText.classList.add('fade-out');
        
        setTimeout(() => {
            // Update content
            entityIndex = (entityIndex + 1) % entities.length;
            actionIndex = (actionIndex + 1) % actions.length;
            
            entityText.textContent = entities[entityIndex];
            actionText.textContent = actions[actionIndex];
            
            // Fade in
            entityText.classList.remove('fade-out');
            actionText.classList.remove('fade-out');
        }, 500);
    }
    
        // Find the header element to pause on hover
        const hoverElements = document.querySelector('.pause-on-hover');
        
        if (hoverElements) {
            hoverElements.addEventListener('mouseenter', () => {
                isPaused = true;
                console.log('Rotation paused');
            });
            
            hoverElements.addEventListener('mouseleave', () => {
                isPaused = false;
                console.log('Rotation resumed');
            });
        }
        
        // Start the rotation with 6.8 second interval
        rotationInterval = setInterval(updateTexts, 6800);
        
        // Log to help with debugging
        console.log('Text rotation initialized');
    }
})();
