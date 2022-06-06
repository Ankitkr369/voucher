
function user(name,email,address,amount)
{
    this.name=name;
    this.email=email;
    
    this.address=address;
   
    this.amount=amount;
}



function storeData(event){

 

    let form=document.getElementById("form")

    let name=form.name.value;

    let email =form.email.value;

    let address=form.address.value;

    let amount =form.amount.value;

    let u=new user(name,email,address,amount)

    let data=JSON.parse(localStorage.getItem("user"))||[]

    data.push(u)

    let wallet= form.amount.value

    localStorage.setItem("user",JSON.stringify(data))

    localStorage.setItem("wallet",JSON.stringify(wallet))




}