// const saveText = document.querySelector('.saveText');
// const textArea = document.querySelector('.textarea');
// const textOfTheDay = document.querySelector('.textOfTheDay');

// let key = 'name';
// let keyValue = 'Eren';
// localStorage.setItem(key, keyValue);

// // method 2

// localStorage.setItem('name', 'Eren');
// localStorage.setItem('name2', 'Zehra');

// //method 3
// localStorage.name = 'Eren';
// //localStorage.keyName = keyValue

// saveText.addEventListener('click', () => {
//   const textareaValue = document.querySelector('.textarea').value;
//   const textOfTheDayValue = document.querySelector('.textOfTheDay').value;
// });
////
////
////
////
////
////
// const userNameText = document.querySelector('.userName');
// const userAgeText = document.querySelector('.userAge');

// const saveNameBtn = document.querySelector('.saveNameBtn');
// const saveAgeBtn = document.querySelector('.saveAgeBtn');

// saveNameBtn.addEventListener('click', () => {
//   const userName = document.querySelector('.name').value;
//   userNameText.textContent = userName;
//   localStorage.setItem('name', userName);
// });

// function displayUserName() {
//   const nameFromLocalStorage = localStorage.getItem('name');

//   if (nameFromLocalStorage) {
//     userNameText.textContent = nameFromLocalStorage;
//   }
//   if (!nameFromLocalStorage) {
//     userNameText.textContent = 'No name data in local db';
//   }
// }

// displayUserName();

const statusText = document.getElementById('status');
const textArea = document.getElementById('textarea');
const saveButton = document.getElementById('save-button');

let savedText = localStorage.getItem('id');
if (savedText) {
  textArea.value = savedText;
}

function save() {
  console.log(textArea.value);
  localStorage.setItem('text', textArea.value);
  statusText.textContent = 'saved!!';
}

let timeout;
textArea.addEventListener('input', () => {
  statusText.textContent = 'Unsaved changes';
  clearTimeout(timeout);
  timeout = setTimeout(save, 1000);
});

saveButton.addEventListener('click', save);
