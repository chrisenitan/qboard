
//document.cookie = "name=Chris; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/; samesite=Lax;";

//document.cookie = "user=Enitan; max-age=31536000; path=/; samesite=Lax;";

//js dom is rediculous
let showUrl = document.createElement('P');
showUrl.innerHTML = window.location.href;

var para = document.createElement("P");
para.innerText = "Form to: /sql/createpost";


function prev(){
    console.log("Form surpressed")

    //do some submit in backend

    return false;
}

window.addEventListener("load", function(){
    //all events

    //ajaxy
    if(document.getElementById("ajaxy")){
        document.getElementById("ajaxy").addEventListener("click", function(){
            alert("Not yet implemented Ajax")
        })
    }


})


