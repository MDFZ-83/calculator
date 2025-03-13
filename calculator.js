let input = document.querySelector("#inputt")

let numbers = []
let math = "/*+-"
function Numbers(number){
    
   
    numbers.push(number)
    
   
    input.value = numbers.join("")

    console.log()
   
}


function calculate(){


    input.value = ""

    let solve = numbers.join("")
    
    let num1 = 0
    let num2 = 0

    for(let i of solve){
        if(math.includes(i)){
            let num1 =  Number(solve.slice(0,solve.indexOf(i)))
            console.log(num1)
            let num2 =  Number(solve.slice(solve.indexOf(i)+1,solve.length))
            console.log(num2)

            switch(i){
                case "+" :
                   return num1 + num2
                   
                case "-" :
                   return num1 - num2
                   
                case "*" :
                    return num1 * num2
                    
                case "/" :
                   return num1 / num2
                      
            }
        }

        
    }

    
    
}
function plus(){
    
    
}


document.querySelectorAll(".number").forEach(n =>{
    n.addEventListener("click" , m=>{
        Numbers(n.innerHTML)
        
    })
    
})

document.querySelectorAll(".math").forEach(n =>{
    n.addEventListener("click" , m=>{
        Numbers(n.innerHTML)
       
    })
    
})

document.querySelector("#plus").addEventListener("click" ,n=>{
    plus()
})

document.querySelector("#equal").addEventListener("click" , n=>{
    input.value = calculate()
})

document.querySelector("#btn-c").addEventListener("click" , n=>{
    numbers = []
    input.value = ""
})

document.querySelector("#btn-back").addEventListener("click" , n=>{
    numbers.pop()
    let back= String(numbers.join(""))
    input.value = back

})

