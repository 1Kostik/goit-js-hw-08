import throttle from 'lodash.throttle';
const STORGET_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};
let formData = {};
populateTextarea();
refs.form.addEventListener('submit', onFromSubmit);

function onFromSubmit(event) {
  event.preventDefault();

  if ((refs.input.value && refs.textarea.value) === '') {
    const message = 'Fill in all fields !';
    alert(message);
  } else {
    console.log(JSON.parse(localStorage.getItem(STORGET_KEY)));
    event.target.reset();
    localStorage.removeItem(STORGET_KEY);
    formData = {};
  }
}

function populateTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORGET_KEY));
  if (saveMessage) {
    for (const key in saveMessage) {
      formData[key] = saveMessage[key];
      refs.form.elements[key].value = saveMessage[key];
    }
  }
}

refs.form.addEventListener(
  'input',
  throttle(event => {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORGET_KEY, JSON.stringify(formData));
  }, 500)
);

//   const parseKey = JSON.parse(saveMessage);
//   parseKey.email === undefined ? refs.input.value = '' : (refs.input.value = parseKey.email, formData.email = parseKey.email);
//   parseKey.message === undefined ? refs.textarea.value = '' : (refs.textarea.value = parseKey.message, formData.message = parseKey.message);
