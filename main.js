// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Initial font size
    let fontSize = 16;
  
    // References to elements
    const content = document.getElementById('content');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
  
    // Function to update font size
    function updateFontSize(size) {
        content.style.fontSize = size + 'px';
    }
  
    // Event listeners for buttons
    increaseButton.addEventListener('click', () => {
        fontSize += 2;
        updateFontSize(fontSize);
    });
  
    decreaseButton.addEventListener('click', () => {
        fontSize = Math.max(8, fontSize - 2); // Prevent font size from going below 8px
        updateFontSize(fontSize);
    });
  
    // Set initial font size
    updateFontSize(fontSize);
  });
  