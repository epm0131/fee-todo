(function(){
  var itemArrayList =[];

  function toDoList(text) {

    var listItem = document.createElement('li');

    var articleItem = document.createElement('article');
    listItem.appendChild(articleItem);

    var buttonCheck = document.createElement('button');
    buttonCheck.classList.add('check');
    articleItem.appendChild(buttonCheck);

    var pItem = document.createElement('p');
    pItem.innerText = text;
    articleItem.appendChild(pItem);

    var buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete');
    buttonDelete.innerText = 'X';
    articleItem.appendChild(buttonDelete);

    document
    .querySelector('ul')
    .appendChild(listItem);
  }

  document
  .querySelector('form')
  .addEventListener('submit', function pressKey(event) {
   event.preventDefault();
    var enteredData = document.querySelector('.new-todo').value;

    toDoList(enteredData);

    var arrayObject = {
      text: enteredData,
      when: Date.now()

    };

    itemArrayList.push(arrayObject);
    console.log(itemArrayList);
  });


  document
  .querySelector( 'ul' )
  .addEventListener('click', function clickCompleted(event){
    console.log(event);
  });























})();
