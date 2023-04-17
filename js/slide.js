function afterEffect() {
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
            slideText.innerHTML = "<h1>Thank you for voting</h1>"
            arrInput.forEach((el, _index) => {
              arrInput[_index].vote = el.leftVote === 1 ? 'left' : 'right'
            })
            // console.table(arrInput)
            sendVotesToDb()
          } else {
            slideshowImages[i + 1].classList.add("active");


          }
        } else {
          images[j].parentElement.classList.remove("active");
          if (images[j].parentElement.nextElementSibling) {
            images[j].parentElement.nextElementSibling.classList.add("active");
          }

        }

        currentSlide.classList.remove("active");

      });

    }

    console.log("line 34")

  }


}