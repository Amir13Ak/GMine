let xw = 0 ;let yh = 0 ;let l = 0 ;let h = 250 ;let T1 ;let T4 ;let T2 ;let T3 ;let randomNum = 0 ;let canvas = document.getElementById("myCan");function MakeCanvas() {    let ctx = canvas.getContext('2d') ;    ctx.fillRect(xw,yh,40,40) ;    canvas.style.position = "absolute";    canvas.style.left = l + "px" ;    canvas.style.top = h + "px";    canvas.style.borderRadius = 50 + "%" ;    let ld = document.getElementById("MyDiv") ;    ld.style.position = "absolute";    ld.style.left = "100px" ;    ld.style.top = "50px" ;}function randomInt(min, max) {    return Math.floor(Math.random() * (max - min + 1) + min)}function CheCK() {    let x = document.getElementById("myCan").offsetLeft ;    let y = document.getElementById("myCan").offsetTop ;    if (y <= 1){        randomNum = randomInt(100,460) ;      T1 =  setInterval(function () {            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            let j = x / randomNum ;            y = y + 2 ;            x = x + j ;            if (x > 463 || y > 463){clearInterval(T1) ;}            }, 10) ;    }    if (x <= 1){        randomNum = randomInt(100,460) ;        T4 =  setInterval(function () {            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            let j = y / randomNum ;            x = x + 2 ;            y = y + j ;            if (x > 463 || y > 463){clearInterval(T4) ;}        }, 10) ;    }    if (x >= 459){        randomNum = randomInt(230,460) ;        T2 =  setInterval(function () {            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            let j = y / randomNum ;            x = x - 2 ;            y = y - j ;            if (x < -3 || y < -3 ){clearInterval(T2) ;}        }, 10) ;    }    if (y >= 459){        randomNum = randomInt(230,460) ;        T3 =  setInterval(function () {            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            let j = x / randomNum ;            y = y - 2 ;            x = x - j ;            if (x < -3 || y < -3){clearInterval(T3) ;}        }, 10) ;    }}function Start() {    CheCK() ;    my_time = setTimeout('Start()' , 100) ;}