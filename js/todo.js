(function(){


  document
  .querySelector('form')
  .addEventListener('submit', function pressKey(event) {
    event.preventDefault();
    console.log(event);
    console.log( document.querySelector('.new-todo').value );

    var listItem = document.createElement('li');
    var articleItem = document.createElement('article')
    var buttonCheck = document.createElement('button')


  });


























})();
