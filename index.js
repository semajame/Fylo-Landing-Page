const error = document.getElementById("error");

const email = document.getElementById("email");

const sent = document.getElementById("sent");

const querysubmit = document.querySelector(".submit");

querysubmit.addEventListener("click", ()=>{

    if(!email.value.includes("@gmail.com")){
        error.classList.add("active");
        sent.classList.remove("active");
    }

    else{
        sent.classList.add("active");
        error.classList.remove("active");
    }
})