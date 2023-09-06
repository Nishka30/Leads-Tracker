const welcomeEl = document.getElementById("welcome-el")
function greetUser(greeting,name1,emoji)  {  //parameters
welcomeEl.textContent =`${greeting},${name1} ${emoji}`
}
greetUser("howdy","Per","🙌") 
           //arguments //arguments are created outside of function 


// numbers as function parameters
function add (num1,num2){
    return num1+num2
}
console.log(add(3,4))
console.log(add(9,102))

//logs out 7 and 11


//arrays as parameters
function getfirst(arr){
    return arr[0]
}

let card=getfirst([10,2,5])
console.log(card)


const tabs =[
{url:"https://www.linkedin.com/in/per-harald-borgen/"}
]