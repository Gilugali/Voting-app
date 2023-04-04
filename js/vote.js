
              
const slideshowContainer = document.querySelectorAll('.slideshow-images');

Array.from(slideshowContainer).forEach((el,index)=>{
  

    const leftVote = el.querySelectorAll('.left');
    console.log(leftVote);
    let leftCount = 0;
    
Array.from(leftVote).forEach(vote =>{
    vote.addEventListener('click', ()=>{
        
        leftCount++;
        console.log(leftCount);
    })
 
});


const rightVote = el.querySelectorAll('.right');
console.log(rightVote);
let rightCount = 0;
Array.from(rightVote).forEach((num)=>{
    num.addEventListener('click', ()=>{
   rightCount++;
   console.log(rightCount)
});
});

});
     