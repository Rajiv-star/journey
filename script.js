document.querySelectorAll('.collage-item img').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.2)';
        img.style.opacity = '0.7';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.opacity = '1';
    });
});