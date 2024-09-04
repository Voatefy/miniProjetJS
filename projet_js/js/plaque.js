let i = 0
function changeImage() {
   let photos = document.getElementById("image");
   let array_of_image = [
      "./../photos/brain.jpg", 
      "./../photos/brain1.jpg", 
      "./../photos/brain2.jpg", 
      "./../photos/controleur.jpg"
   ];
   let j = i % array_of_image.length;
   photos.src = array_of_image[j];
   i++;
}

setInterval(() => {
   changeImage();
}, 1500);