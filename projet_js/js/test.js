let i=1;
setInterval(() => {
    if (i%4 == 0){
        document.getElementById("elem1").style.zIndex=5
        document.getElementById("elem2").style.zIndex=3
        document.getElementById("elem3").style.zIndex=2
        document.getElementById("elem4").style.zIndex=1
    }
    if (i%4 == 0){
        document.getElementById("elem1").style.zIndex=1
        document.getElementById("elem2").style.zIndex=5
        document.getElementById("elem3").style.zIndex=3
        document.getElementById("elem4").style.zIndex=2
    }
    if (i%4 == 0){
        document.getElementById("elem1").style.zIndex=2
        document.getElementById("elem2").style.zIndex=1
        document.getElementById("elem3").style.zIndex=5
        document.getElementById("elem4").style.zIndex=3
    }
    if (i%4 == 0){
        document.getElementById("elem1").style.zIndex=3
        document.getElementById("elem2").style.zIndex=2
        document.getElementById("elem3").style.zIndex=1
        document.getElementById("elem4").style.zIndex=5
    }
}, 2000);