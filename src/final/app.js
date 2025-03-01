function toggleSection(sectionId, event) {
    // Find the section corresponding to this sectionId
    const section = document.getElementById(sectionId);

    // Find the text div inside the section
    const text = section.querySelector('div');

    // Toggle the display of the text div
    if (text.style.display === 'none')
        text.style.display = 'block';
    else
        text.style.display = 'none';

    // Find the button inside the section
    const button = event.target;

    // Change the text of the button
    if (button.innerText === 'Show')
        button.innerText = 'Hide';
    else
        button.innerText = 'Show';
}

function toggleImage() {
    // Find the image
    const image = document.getElementById('image');
    // Check class of image
    if (image.className === 'image-left')
        image.className = 'image-right';
    else
        image.className = 'image-left';
}