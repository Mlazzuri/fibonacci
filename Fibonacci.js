function num() {
    let numero = 6
    var lista=[]
    let num1 =0
    let num2= 1
    let num3 =0
    for (let i=0; i<=numero; ){
        
        console.log(i)
        num3 = num1+ num2
        num2= num1
        num1 = num3
        
        console.log(num1)
        i++
        lista.push(num1)

    }
    console.log(lista)
}

num()