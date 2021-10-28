let sec = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');



setInterval(() => {


    let time = new Date();
    let current_sec = time.getSeconds();
    let current_min = time.getMinutes();
    let current_hour = time.getHours();

    sec.style.transform = `rotate(${getClockPos(current_sec, 60)}deg)`;
    min.style.transform = `rotate(${getClockPos(current_min, 60)}deg)`;
    hour.style.transform = `rotate(${getClockPos(current_hour, 12)}deg)`;


}, 1000);


// Clock positon cal
function getClockPos(current, range) {

    return (360 * current) / range;
}