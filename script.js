let btn = Array.from(document.querySelectorAll(".btn"));
let section = Array.from(document.querySelectorAll(".section"));
let imgM = Array.from(document.querySelectorAll(".Accordion img"));

console.log(section.length-1);
btn.forEach((btns) => {
    
  btns.addEventListener("click", (e) => {
    
    for(let i = 0 ; i< section.length ; i++){
      imgM[i].classList.add('rotate2')
    }
    section[btn.indexOf(btns)].classList.remove("none");
    imgM[btn.indexOf(btns)].classList.remove("rotate2");
    section[btn.indexOf(btns)].classList.toggle("active");
    imgM[btn.indexOf(btns)].classList.toggle("rotate");
  });
});
