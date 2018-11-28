let timer = document.querySelector('.timer');
 let clock = setTimeout(function startTime() {
    let time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();
     if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    timer.textContent = h + ':' + m + ':' + s;
     setTimeout(startTime, 1000);
});