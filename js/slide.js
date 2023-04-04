const slideshowImages = document.querySelectorAll(".slideshow-images");
const slideText = document.querySelector('.slideshow-container');

slideshowImages[0].classList.add("active");

for (let i = 0; i < slideshowImages.length; i++) {
  const images = slideshowImages[i].querySelectorAll("img");

  for (let j = 0; j < images.length; j++) {
    images[j].addEventListener("click", () => {

      const currentSlide = document.querySelector(".slideshow-images.active");

      if (j === images.length - 1) {
       
        if (i === slideshowImages.length - 1) {
                
        } else {
          slideshowImages[i + 1].classList.add("active");
      
        }
      } else {
        images[j].parentElement.classList.remove("active");
        images[j].parentElement.nextElementSibling.classList.add("active");
      
      }
      
      currentSlide.classList.remove("active");
      
    });
  
  }

}

