import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  
};
const formData = {
    email: '',
    message: '',
};
const LOCALSTORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));
onStorageData(); 

function onInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
  if (formData) 
    console.log(formData);
    e.preventDefault();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset();
};
function onStorageData() {
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    const savedDataParse = JSON.parse(savedData);
  if (savedDataParse) {
  
        dataInputValue(savedDataParse);
  }
}

function dataInputValue(data) {
  formData.email = data.email;
  formData.message = data.message;
  refs.form.elements.email.value = formData.email;
  refs.form.elements.message.value = formData.message;
}