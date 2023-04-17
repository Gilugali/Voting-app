let slides = []
const slideShowContainer = document.querySelector('.slideshow-container')

function getSlides() {
    fetch('/choices')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            slides = data
            
            addToDOM()
            afterEffect()
            votes()
         
        })
        .catch(e => {
            console.log("Something went wrong. Please kill yourself!")
            console.log(e)
        })
}

function addToDOM() {
    slideShowContainer.innerHTML = ""
    slides.forEach((el, i) => {
        const container = document.createElement('div');
        container.classList.add('slideshow-images')


        const captionText = document.createElement('h3')
        captionText.textContent = "who's famous"
        captionText.classList.add('caption');

        const leftImage = document.createElement('img')
        leftImage.src = el.leftImage
        leftImage.classList.add('left')

        const orTxt = document.createElement('h2')
        orTxt.textContent = 'OR'

        const rightImage = document.createElement('img')
        rightImage.src = el.rightImage
        rightImage.classList.add('right');

        const idSpan = document.createElement('span')
        idSpan.textContent = el._id
        idSpan.style.display = "none"
        idSpan.classList.add("idSpan")

        container.append(captionText, leftImage, orTxt, rightImage, idSpan);
        slideShowContainer.appendChild(container)
    })



}

getSlides()