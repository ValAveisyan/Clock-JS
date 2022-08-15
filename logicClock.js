let seconds = 0;
let minutes = 0;
let hours = 0;

let d = new Date();

setInterval(
    function () {

        d = new Date();
        seconds = d.getSeconds() * 6;
        minutes = d.getMinutes() * 6 ;
        hours = d.getHours() * 30;

        const hour = document.getElementById('hours');
        hour.style.transform = 'rotate(' + hours + 'deg)';

        const second = document.getElementById('seconds');
        second.style.transform = 'rotate(' + seconds + 'deg)';

        const minute = document.getElementById('minutes');
        minute.style.transform = 'rotate(' + minutes + 'deg)';
    },1000
);


