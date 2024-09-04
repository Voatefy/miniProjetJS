let i = 0
function changeImage() {
   let j;
   let photos = document.getElementById("img");
   let tout = ["1.png","2.jpg"];
   j = i % tout.length;
   photos.src = tout[j];
   i++
}

setInterval(() => {
   changeImage();
}, 2000);