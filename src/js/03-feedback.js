import throttle from 'lodash.throttle';
const STORGET_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input')
};
populateTextarea();
refs.form.addEventListener('submit', onFromSubmit);

function onFromSubmit(event) {
  event.preventDefault();
  if ((refs.input.value && refs.textarea.value) === "") {
    const message = "Fill in all fields !";
    alert(message);
  } else {
    event.target.reset();
    localStorage.removeItem(STORGET_KEY);
  }
}

function populateTextarea() {
  const saveMessage =localStorage.getItem(STORGET_KEY);
  if (saveMessage) {
    const parseKey = JSON.parse(saveMessage);
    refs.input.value = parseKey.email;
    refs.textarea.value = parseKey.message;
  }
}
const formData = {};

refs.form.addEventListener('input', throttle(event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORGET_KEY, JSON.stringify(formData));
},500));
console.log(formData);
