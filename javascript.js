document.getElementById("GMC").innerHTML = "Welcome to JavaScript DOM!";

document.getElementById("image").src = "./img/pexels-jaime-reimer-2662116.jpg";
document.getElementById("image").style.borderRadius = "15px";
document.getElementById("image").style.boxShadow = "5px 5px 5px gray";

const x = document.getElementById("GMC").innerHTML;
document.getElementById("goMyCode").innerHTML  = x;
document.getElementById("intro").innerHTML  = "This is Intro";

const y = document.getElementById("intro").innerHTML;
document.getElementById("outro").innerHTML = y + " " + "This is Outro now";

function validateForm(){
        let z = document.forms["myForm"]["uName"].value;
        if (z == ""){
            alert("Username must be filled");   
        }
        let s = document.forms["myForm"]["pNumber"].value;
        if (s == ""){
            alert("Phone number must be filled");       
        }
        let b = document.forms["myForm"]["pWord"].value;
        if (b == ""){
            alert("Password must be filled");
            
        }

        return false;
}

function changeText(i){
    i.innerHTML = "Oooops!";
    
}

function displayDate(){
    document.getElementById("empty").innerHTML = Date();
}