const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const button = document.getElementById('btn');

const y1 = document.getElementById('y1');
const y2 = document.getElementById('y2');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const hr1 = document.getElementById('hr1');
const min1 = document.getElementById('min1');
const sec1 = document.getElementById('sec1');

const calculate = () => {
    let dob = new Date(year.value, month.value, date.value);
    let today = new Date();
    let last = new Date(today - dob);
    
    let year2 = last.getFullYear() -1970
    let month2 = last.getMonth() +1
    let date2 = last.getDate()
    let hour2 = last.getHours()
    let minute2 = last.getMinutes()
    let second2 = last.getSeconds()
    
    y1.innerText = year2;
    m1.innerText = month2;
    d1.innerText = date2;
    hr1.innerText = hour2;
    min1.innerText = minute2;
    sec1.innerText = second2;
    
    setTimeout(calculate,1000)
}

button.addEventListener('click',calculate)
