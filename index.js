setInterval(()=>{
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30*htime + mtime/2 + stime/120;
    mroation = 6*mtime + stime/10;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mroation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);