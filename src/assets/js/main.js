const api = 'https://api.adviceslip.com/advice';
const getAdviceBtn = document.querySelector('#getAdvice');
const adviceCon = document.getElementById('advice-container');
const adviceId = document.getElementById('adviceId');
const adviceContent = document.getElementById('adviceContent');


function getAdvice() {
    fetch(api).then(response => response.json()).then(data => {
      adviceId.textContent = `#${data.slip.id}`;
      adviceContent.textContent = data.slip.advice;
    })
}

window.addEventListener('DOMContentLoaded', () => {
    getAdvice()
})
