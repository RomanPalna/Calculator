const refs = {
  navRightBtn: document.querySelector('.right'),
  navLeftBtn: document.querySelector('.left'),
  firstForm: document.querySelector('.formOne'),
  secondForm: document.querySelector('.formScnd'),
  discr: document.querySelector('.calculator__discription'),
};

refs.navRightBtn.addEventListener('click', handleChangeDistanse);
refs.navLeftBtn.addEventListener('click', handleChangeAvarage);

function handleChangeAvarage() {
  refs.navLeftBtn.classList.add('active');
  refs.navRightBtn.classList.remove('active');
  refs.firstForm.classList.add('active__form');
  refs.secondForm.classList.remove('active__form');
  refs.discr.innerText =
    'Дізнайтеся середню витрату палива автомобіля на 100 кілометрів по пройденій відстані та кількості літрів витраченого пального.';
}

function handleChangeDistanse() {
  refs.navRightBtn.classList.add('active');
  refs.navLeftBtn.classList.remove('active');
  refs.firstForm.classList.remove('active__form');
  refs.secondForm.classList.add('active__form');
  refs.discr.innerText =
    'Дізнайтеся скільки пального ви витратите у поїздці, знаючи відстань, яку плануєте проїхати, а також середню витрату палива вашого автомобіля.';
}
