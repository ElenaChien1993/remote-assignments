const inputForm = document.getElementById('input-form');
const inputContainer = document.getElementById('input-container');
const inputField = document.getElementById('input-field');
const resultContainer = document.getElementById('result-container');
const textResultEl = document.getElementById('text-result');
const resetBtn = document.getElementById('btn-reset');

let inputNumber;

const submitNumber = (e) => {
  e.preventDefault();
  inputNumber = e.srcElement[0].valueAsNumber;
  if (inputNumber > 0) {
    getData(inputNumber);
  } else {
    alert('Your number must be bigger than zero.')
  }
};

const showResult = (data) => {
  textResultEl.textContent = `Your input is: ${inputNumber}, Your sum value is: ${data}`;
  inputContainer.classList.toggle('hidden');
  resultContainer.classList.toggle('hidden');
};

const resetCalculator = () => {
  inputField.value = '';
  inputContainer.classList.toggle('hidden');
  resultContainer.classList.toggle('hidden');
};

// API request
async function getData (num) {
  const url = `http://localhost:3000/getData?number=${num}`;
  const res = await fetch(url);
  const data = await res.json();
  
  showResult(data.sum);
}

inputForm.addEventListener('submit', submitNumber);
resetBtn.addEventListener('click', resetCalculator);