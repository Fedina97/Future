let form = document.getElementById('feedbackForm');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let name = nameInput.value;
  let email = emailInput.value;
  let message = messageInput.value;

  let data = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };
  console.log('Данные', data);
});
