const images = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpeg",
    "images/foto5.jpg",
    "images/foto6.jpeg"
  ];
  
  let current = 0;
  const sliderImage = document.getElementById("sliderImage");
  
  function showImage(index) {
    sliderImage.src = images[index];
  }
  
  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }
  
  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
  
  setInterval(nextImage, 4000);
  showImage(current);
  