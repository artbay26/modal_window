const showMod = document.querySelector('.showMod');
const wrapper = document.querySelector('.box__wrapper');
const signUpBtn = document.querySelector('#signUpBtn');
const loginBtn = document.querySelector('#loginBtn');
const signUpModal = document.querySelectorAll('.box__modal');
const submitBtnGet = document.querySelector('#btnGetStarted');
const submitBtnLog = document.querySelector('#btnLoginBotoom');

showMod.addEventListener('click', toggleModal);
signUpBtn.addEventListener('click', showModal);
loginBtn.addEventListener('click', showModal);
submitBtnGet.addEventListener('click', closeModal);
submitBtnLog.addEventListener('click', closeModal);
wrapper.addEventListener('click', closeModal);

function toggleModal() {
    wrapper.classList.toggle('hide');
}

function showModal() {
    for (i = 0; i < signUpModal.length; i++) {
        signUpModal[i].classList.toggle('hide');
    }
}

function closeModal(e) {
    if (e.target == this) {
        wrapper.classList.toggle('hide');
    }
}