let logo = document.querySelector('.logo');
let header = document.querySelector('header');
let sec1 = document.querySelector('.sec-1');
let footer = document.querySelector('footer');
let closeBtn = document.querySelector('.close');
let show = document.querySelector('.show');
let okay = document.querySelector('.okay');
let okText = document.querySelector('.ok-text');

logo.onclick = function() {
    header.classList.toggle('hide');
    sec1.classList.toggle('hide');
    footer.classList.toggle('hide');
    show.classList.toggle('hide');
    okay.classList.remove('okay');
}

closeBtn.onclick = function() {
    header.classList.remove('hide');
    sec1.classList.remove('hide');
    footer.classList.remove('hide');
    show.classList.remove('hide');
    okay.classList.add('okay');
}

okText.onclick = function() {
    header.classList.remove('hide');
    sec1.classList.remove('hide');
    footer.classList.remove('hide');
    show.classList.remove('hide');
    okay.classList.add('okay');
}


let choose = document.querySelectorAll('.choose-place a')
choose.forEach(item => {
    item.onclick = function() {
        let currents = document.querySelector('.current');
        currents.className = currents.className.replace('current', '');
        item.className += 'current';
    }
})

// time

function realTime() {
    let hrs = new Date().getHours();
    let mins = new Date().getMinutes();
    let sec = new Date().getSeconds();

    let ampm = (hrs < 12) ? "am" : "pm";

    hrs = (hrs > 12) ? hrs - 12 : hrs;

    hrs = ("0" + hrs).slice(-2);
    mins = ("0" + mins).slice(-2);
    sec = ("0" + sec).slice(-2);

    document.getElementById('time').innerHTML = hrs + " : " + mins + " : " + sec + "  " + ampm;

    let t = setTimeout(realTime, 500);
}
realTime();
