(function(){


  document
  .querySelector('form')
  .addEventListener('submit', function pressKey(event) {
    event.preventDefault();
    console.log(event);
    console.log( document.querySelector('.new-todo').value );

function toDoList(text) {

    var listItem = document.createElement('li');

    var articleItem = document.createElement('article');

    var buttonCheck = document.createElement('button');
    buttonCheck.classList.add('check');
    articleItem.appendChild(buttonCheck);

    var pItem = document.createElement('p');
    pItem.innerText = text;

    var buttonDelete = document.createElement('xButton');
    buttonDelete.classList.add('delete');
    articleItem.appendChild(buttonDelete);
}

  });


























})();
