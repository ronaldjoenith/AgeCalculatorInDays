var resultContainer=document.querySelector(".resultContainer")

function agedays(){
   
    var birthYear=prompt("what is your birthyear?")
    var result=(2024-birthYear)*365
    var heading=document.createElement("h1")
    heading.setAttribute("id","thisisresult")
    heading.textContent="your age in days is:"+ result
    resultContainer.append(heading)
}

function reset(){
    var final=document.getElementById("thisisresult")
    final.remove()
}