const btn = document.querySelector('#submit')
const age = document.querySelector('#age')
const msg = document.querySelector('.msg')

const handleSubmit = (e) => {
    e.preventDefault();
    let inputDate = new Date(age.value).getTime();
    let currentDate = new Date().getTime();
    if (inputDate < currentDate) {
        let diff = currentDate - inputDate;
        let years = Math.ceil(diff / (1000 * 60 * 60 * 24));
        if (years <= 365) {
            msg.innerHTML = 'Your age is : ' + years + ' days.';
        } else {
            msg.innerHTML = 'Your age is : ' + Math.floor(years / 365) + ' years.';
        }
    } else {
        msg.innerHTML = 'Please enter valid date !!';
    }
}

btn.addEventListener('click', handleSubmit)
