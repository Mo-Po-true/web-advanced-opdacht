/* afbeeldingen-page: code om de afbeeldingen te vergroten */

/* deel 1 */
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn-modal');
    const modal = document.querySelector('.bloc-modal');
    const close = document.querySelector('.close');
    const img = document.querySelector('.bloc-img img'); 

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const indexValue = e.target.getAttribute('data-index');
            img.src = `afbeeldingen/af${indexValue}.jpg`;
            modal.classList.add('active-modal');
        });
    });

    close.addEventListener('click', () => {
        modal.classList.remove('active-modal');
    });
});
