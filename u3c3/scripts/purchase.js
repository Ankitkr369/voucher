let userd=JSON.parse(localStorage.getItem("user"))

userd.map(function(el){
    let div=document.createElement("div")
    let price=document.createElement("p")
    price.innerText=el.amount
    div.append(price);
    document.getElementById("wallet_balance").append(div)

})