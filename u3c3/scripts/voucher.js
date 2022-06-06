let userd=JSON.parse(localStorage.getItem("user"))

userd.map(function(el){
    let div=document.createElement("div")
    let price=document.createElement("p")
    price.innerText=el.amount
    div.append(price);
    document.getElementById("wallet_balance").append(div)

})


    const getDataobj= async()=>{

try{
    let res=await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);

let join=await res.json();
/*console.log(join)*/
let data = join[0].vouchers;
/*console.log(data);*/
show(data);
;}catch(err){
    console.log("error",err);
}




};

getDataobj()

function show(data){

    document.querySelector("#voucher").innerHTML=null;

    data.map(function(el){

let div=document.createElement("div")
div.setAttribute("id","Voucher_list")
let image=document.createElement("img");
image.src=el.image;
let name=document.createElement("p")
name.innerText=el.name;
let price=document.createElement("p")
price.innerText=el.price;

let btn=document.createElement("button");

btn.innerText="buy";

btn.setAttribute("class","buy_voucher");
btn.addEventListener("click",function(){getDate(el);})


div.append(image,name,price,btn)

document.querySelector("#voucher").append(div);
    })


}