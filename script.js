const btn = document.querySelector('#submit')
const age = document.querySelector('#age')
const msg = document.querySelector('.msg')

const handleSubmit = (e)=>{
    e.preventDefault();
    let inputDate = new Date(age.value).getTime();
    let currentDate = new Date().getTime();
    let diff = currentDate-inputDate;
    let years = Math.floor((diff / (1000 * 60 * 60 * 24))/365);
    msg.innerHTML = 'Your age is : '+ years + '.'; 
}

btn.addEventListener('click',handleSubmit)
