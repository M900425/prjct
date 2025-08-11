import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const modal = document.querySelector(`.modal-window`);
const btnClose = modal.querySelector(`.close-btn`);

const modalClosed = () => {
    modal.classList.remove(`is-open`);
    modal.remove();
};

btnClose.addEventListener('click', modalClosed);


const mobileCloseBtn = document.querySelector(`.menu-close-btn`);
const mobileOpenBtn = document.querySelector(`.burger-btn`);
const header = document.querySelector(`.hero`);
const headerMobContainer = header.querySelector(`.container`);

const mobMenuOnOff = () => {
    headerMobContainer.classList.toggle(`mobile-open`);
};

mobileOpenBtn.addEventListener(`click`, mobMenuOnOff);
mobileCloseBtn.addEventListener(`click`, mobMenuOnOff);


const dropdownBtn = document.querySelector('.drop');
const langLinks = document.querySelectorAll('.lang');

const ChangeLang = (event) => {
    event.preventDefault();
    langLinks.forEach(link => link.classList.remove(`active`));
    const selectedLang = event.currentTarget;
    selectedLang.classList.add(`active`);
    dropdownBtn.textContent = selectedLang.textContent;
};

langLinks.forEach(link => link.addEventListener('click', ChangeLang));

const footerForm = document.querySelector(`.footer-form`);
const footerInput = footerForm.querySelector(`.footer-input`);

footerForm.addEventListener(`submit`, e => {
    e.preventDefault();
    iziToast.destroy();
    if (footerInput.value.trim() === '') {
        iziToast.warning({
            id: 'footer-warning',
            backgroundColor: '#D2CE4E',
            messageColor: '#262624',
            position: 'topRight',
            message: 'Please fill in the input field!',
            close: false,
            transitionIn: 'bounceInLeft',
            transitionOut: 'flipOutX',
            pauseOnHover: false,
            drag: false,
            progressBar: false,
            messageSize: 18,
        });

    } else {
        iziToast.success({
            backgroundColor: '#4eee0a',
            messageColor: '#262624',
            position: 'topRight',
            message: 'Thank you!',
            close: false,
            transitionIn: 'bounceInLeft',
            transitionOut: 'flipOutX',
            pauseOnHover: false,
            drag: false,
            progressBar: false,
            messageSize: 18,
        });
        footerInput.value = '';
    }
});