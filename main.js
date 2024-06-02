

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

/* deel 2*/
document.getElementById('submitBtn').addEventListener('click', function() {
    const { value: username } = document.getElementById('username');
    const { value: email } = document.getElementById('email');
    const { value: password } = document.getElementById('password');

    const fields = [username.trim(), email.trim(), password.trim()];
    const emptyFields = fields.filter(field => field === '');

    if (emptyFields.length > 0) {
        alert('Vul alstublieft alle velden in.');
    } else {
        const [user, mail, pass] = fields;
        localStorage.setItem('username', user);
        localStorage.setItem('email', mail);
        localStorage.setItem('password', pass);

        alert('Formulier succesvol ingediend!');
    }
});