let savel=document.getElementById("save-el")
let countel=document.getElementById("count-el")
let count=0
 
console.log(save )

function increment(){
    count=count+1
    countel.textContent=count
}
function save(){
    let countstr= count + " - "
    savel.textContent+=countstr
    countel.textContent=0
    count=0

    console.log(count)
}