//adding .innerhtml to add buy buttopn inside div tag
const container=document.getElementById("container")
container.innerHTML="<button onclick='buy()'>Buy!</button>"

function  buy(){
    container.innerHTML+="<p>Thank you fot buying!</p>"
}

// create an element
  //set text content
  //append to ul
//  const li=document.createElement("li")//of type li
//  li.textContent=myLeads[i]
//  ulEl.append(li)


const recipient="james"
const sender="Per Herald Borgen"
const email=
    `hey ${recipient}!
    how is it going?
    cheers ${sender}`
console.log(email)


// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage
//HINTS:
//localStorage.setItem ("myname","nishka")

let name=localStorage.getItem("myname")
console.log(name) //nishka

localStorage.clear() //null



localStorage.setItem("myLeads","www.examplelead.com")//key-value pair
console.log(localStorage.getItem("myLeads")) //gives the value again as stored in the local storage