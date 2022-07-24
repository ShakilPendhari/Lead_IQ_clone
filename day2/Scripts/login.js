let form=document.querySelector("form")
form.addEventListener("submit", input);
let arr=JSON.parse(localStorage.getItem("signupemail"))
console.log(arr)
function input(event) {
    event.preventDefault();
    let email=document.querySelector("#email").value.trim();
    let flag=false;
    for(let i=0; i<=arr.length-1; i++){
        if(arr[i].signupemail === email){
            flag=true;        
        }
    }
    if(flag==true)
    {
        window.location.href="http://127.0.0.1:5500/malicious-profit-4828/day2/index.html"           
        alert("sucessfull login")
    }
    else{
        document.querySelector("input[type=email").value="";
        document.querySelector("input[type=password]").value="";
        alert("Wrong email or Password try again")
    }
}
