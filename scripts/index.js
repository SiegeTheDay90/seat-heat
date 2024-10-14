const seatMap = document.getElementById('seat-map');

seatMap.addEventListener('click', (e) => {
    // console.log("currentTarget:", e.currentTarget);
    // console.log("target:", e.target);
    document.getElementsByClassName('active')[0]?.classList.remove('active');
    e.target.classList.add('active');

    const meta = document.getElementById('meta-data');
    meta.dataset.seat = e.target.innerText;
    meta.dataset.row = e.target.dataset.row;
})

const urlParams = new URLSearchParams(window.location.search);

if(urlParams.get('email')){
    document.getElementById('email').value = urlParams.get('email');
}

if(urlParams.get('period')){
    document.getElementById('period').value = urlParams.get('period');
}