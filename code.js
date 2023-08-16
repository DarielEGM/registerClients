let free = false;
let customers = [];

const validateCustomer = (time) =>{
    let age = prompt("How old are you?");
    if(age > 18){
        if(time >=2 && time < 7 && !free){
            alert(`It's ${time}:00Hs, you can pass for free.`);
            free= true;
        }else{
            alert(`It's ${time}, you can pass, but you have to pay the entrance.`)
        }
        customers = customers.concat(age);
        document.body.innerHTML = "";
        
        for(let customer of customers){
                document.write(customer + "<br>")
        }
    }else{
        alert("You are a minor, you cannot pass.")
    }
}


const enterTime = () =>{
    let hour = prompt("Enter arrival time.");
    validateCustomer(hour);

    setTimeout(validateNewCustomer, 3000);
}

const validateNewCustomer = () =>{
    if((prompt("Enter another customer? Type 'Yes' to repeat the process.")) == "Yes"){
        enterTime();
    }else{
        alert("There are no more guests.");
    }
}   

enterTime();