const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://api.example.com/';

function calculate() {
  const expression = document.querySelector('.display-screen').textContent;
  const result = eval(expression);
  document.querySelector('.display-screen').textContent = result;
  
  fetch(proxyUrl + apiUrl, {
    method: 'POST',
    body: JSON.stringify({ expression, result }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}

document.querySelectorAll('.number, .operator').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    document.querySelector('.display-screen').textContent += value;
  });
});

document.querySelector('.clear').addEventListener('click', () => {
  document.querySelector('.display-screen').textContent = '';
});
