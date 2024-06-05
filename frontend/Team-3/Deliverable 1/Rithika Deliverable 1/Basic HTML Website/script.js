const input = document.getElementById('change');

input.addEventListener('click', function() {
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector("#message");

  message.innerHTML = "Welcome to my webpage " + userInput.value;
});

/*
function myFunction() {
  let userInput = document.querySelector("#userInput");
  let message = document.querySelector("#message");

  message.innerHTML = "Welcome to my webpage " + userInput.value;

}

duck.addEventListener('click',function () {
  const h1Elements = document.querySelectorAll('h1');

  h1Elements.forEach( function(h1) {
    h1.textContent= 'duck';
  })
});


input.addEventListener('click', function() {
  const h2Elements = document.querySelectorAll('h2');

  h2Elements.forEach( function(h2) {
    h2.textContent = "Welcome to my webpage " + userInput.value;
  })

});

*/