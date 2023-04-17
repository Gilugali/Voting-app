let arrInput = [];

function votes() {
  const slideshowContainer = document.querySelectorAll('.slideshow-images');
  Array.from(slideshowContainer).forEach((el, index) => {
    const leftVote = el.querySelector('.left');
    let leftCount = 0;

    if (leftVote !== null) {
      leftVote.addEventListener('click', () => {
        leftCount++;
        arrInput[index].leftVote++;

      })
    }

    const rightVote = el.querySelector('.right');
    let rightCount = 0;
    if (rightVote !== null) {
      rightVote.addEventListener('click', () => {
        rightCount++;
        arrInput[index].rightVote++;
      })
    }

    arrInput.push({
      _id: el.querySelector('.idSpan').textContent,
      leftVote: 0,
      rightVote: 0
    })

  })
  

   
}

function sendVotesToDb(){
  fetch('/vote', {
    method: 'POST',
    body: JSON.stringify({votes: arrInput}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.text())
  .then(data => {
    console.log(data)
    alert(data)
  })
  .catch(e => {
    console.log("SOMETHING WENT HORRIBLY WRONG!")
    console.error(e)
  })
}