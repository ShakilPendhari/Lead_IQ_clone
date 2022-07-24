let signup=document.querySelector("form")

let signuparr=JSON.parse(localStorage.getItem("signupemail")) || [];

signup.addEventListener("submit", pagesign)

function pagesign(event){
   
    event.preventDefault();
   
    let inpt=document.querySelector("input[type=email]").value.trim()
   console.log(inpt !== "")
    if(inpt === ""){
        alert("Enter your email");
    }
    else
    { 
        alert("Signup Successfully");
        window.location.href="http://127.0.0.1:5500/malicious-profit-4828/day2/login.html"
    }
   
    let obj={
        signupemail:inpt,
    }
    signuparr.push(obj)
    localStorage.setItem("signupemail", JSON.stringify(signuparr));
}
