let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resumeBtn = document.querySelector('.resume');
let endBtn = document.querySelector('.end');
let set;
let h = m = s = ms = 0;
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let milli = document.querySelector('.milli');

function start(){
    ms++;
    if(ms > 99){
        ms = 0;
        s++;
        if(s < 10){
            let rs = '0'+s;
            second.textContent = rs;
        }else{
            let rs = s;
            second.textContent = rs;
        }
        if(s > 59){
            s = 0;
            m++;
            if(m < 10){
                let rm = '0'+m;
                minute.textContent = rm;
            }else{
                let rm = m;
                minute.textContent = rm;
            }
            if(m > 59){
                m = 0;
                h++;
                if(h < 10){
                    let rh = '0'+h;
                    hour.textContent = rh;
                }else{
                    let rh = h;
                    hour.textContent = rh;
                }
            }
        }
    }

    if(ms < 10){
        let rms = '0'+ms;
        milli.textContent = rms;
    }else{
        let rms = ms;
        milli.textContent = rms;
    }
}

startBtn.addEventListener('click', function(){
    // console.log('hello');
    set = setInterval(start, 10);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    resumeBtn.style.display = 'none';
    endBtn.style.display = 'block';
})

resumeBtn.addEventListener('click', function(){
    set = setInterval(start, 10);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'block';
    resumeBtn.style.display = 'none';
    endBtn.style.display = 'block';
})

stopBtn.addEventListener('click', function(){
    clearInterval(set);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
    endBtn.style.display = 'block';
})

endBtn.addEventListener('click', function(){
    hour.textContent = "00:";
    minute.textContent = "00:";
    second.textContent = "00";
    milli.textContent = "00";
    clearInterval(set);
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    endBtn.style.display = 'none';
})