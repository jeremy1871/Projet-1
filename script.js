const myGif = document.querySelector(".gif");
const btnSubmit = document.getElementById("btn");
btnSubmit.addEventListener("click", (e)=> {
    e.preventDefault()
       myGif.style.visibility = "visible";
       setTimeout(function() {
        myGif.style.visibility = "hidden";
      }, 2800);
    }
);

