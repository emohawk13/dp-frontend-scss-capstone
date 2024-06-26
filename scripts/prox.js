// Function to reset positions of .layer2 elements
function resetLayerPositions() {
    const move_pictures = document.querySelectorAll('.layer2');

    move_pictures.forEach(picture => {
        // Reset position to original
        picture.style.left = '0px';
        picture.style.top = '0px';
    });
}

// Scroll event listener to reset positions when scrolled down
document.addEventListener('scroll', () => {
    // ID of the div to scroll down to trigger the reset
    const triggerDiv = document.getElementById('moreDiv');
    if (!triggerDiv) return;

    const triggerRect = triggerDiv.getBoundingClientRect();
    // Adjust the offset as needed to determine when to trigger the reset
    const scrollTriggerOffset = 200; 

    // Check if the top of the trigger div is within the viewport
    if (triggerRect.top <= window.innerHeight - scrollTriggerOffset) {
        resetLayerPositions();
    }
});

// Mouse move event listener 
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const move_pictures = document.querySelectorAll('.layer2');

    move_pictures.forEach(picture => {
        const rectPicture = picture.getBoundingClientRect();
        const pictureX = rectPicture.left + rectPicture.width / 2;
        const pictureY = rectPicture.top + rectPicture.height / 2;

        // Calculate distance between current picture position and mouse position
        const dx = mouseX - pictureX;
        const dy = mouseY - pictureY;

        // Calculate distance to move towards the mouse (hypotenuse length)
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Calculate ratio to move 2 pixels towards the mouse
        const ratio = 2 / distance;

        // Calculate new position relative to original position
        const originalX = rectPicture.left;
        const originalY = rectPicture.top;

        const newX = originalX + dx * ratio;
        const newY = originalY + dy * ratio;

        picture.style.left = `${Math.round(newX)}px`;
        picture.style.top = `${Math.round(newY)}px`;
    });
});
