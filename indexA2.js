let xw = 0 ;let yh = 0 ;let l = 200 ;let h = 0 ;let T1 ;let T4 ;let T2 ;let T3 ;let randomNum = 0 ;function MakeCanvas() {    let canvas = document.getElementById("myCan") ;    let ctx = canvas.getContext('2d') ;    ctx.fillRect(xw,yh,40,40) ;    canvas.style.position = "absolute";    canvas.style.left = l + "px" ;    canvas.style.top = h + "px";    let ld = document.getElementById("MyDiv") ;    ld.style.position = "absolute";    ld.style.left = "100px" ;    ld.style.top = "50px" ;}function randomInt(min, max) {    return Math.floor(Math.random() * (max - min + 1) + min)}function CheCK() {    let x = document.getElementById("myCan").offsetLeft ;    let y = document.getElementById("myCan").offsetTop ;    if (y <= 1){      T1 =  setInterval(function () {            let canvas = document.getElementById("myCan");            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            randomNum = randomInt(1 , 3) ;            y = y + 1 ;            x = x + 1 ;            if (x > 461 || y > 461){clearInterval(T1) ;}            }, 10) ;    }    if (x <= 1){        T4 =  setInterval(function () {            let canvas = document.getElementById("myCan");            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            randomNum = randomInt(1 , 3) ;            x = x + 1 ;            y = y + 1 ;            if (x > 461 || y > 461){clearInterval(T4) ;}        }, 10) ;    }    if (x >= 459){        T2 =  setInterval(function () {            let canvas = document.getElementById("myCan");            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            x = x - 1 ;            y = y - 1 ;            if (x < -1 || y < -1 ){clearInterval(T2) ;}        }, 10) ;    }    if (y >= 459){        T3 =  setInterval(function () {            let canvas = document.getElementById("myCan");            canvas.style.position = "absolute";            canvas.style.left = x + "px";            canvas.style.top = y + "px" ;            randomNum = randomInt(1 , 3) ;            y = y - 1 ;            x = x - 1 ;            if (x < -1 || y < -1){clearInterval(T3) ;}        }, 10) ;    }}function Start() {    CheCK() ;}