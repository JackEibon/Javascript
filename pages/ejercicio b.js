let n=" a ";
n = prompt("Elija un numero entero mayor a 0");


function fizzBuzz(n)
{

let frase= "";
let flag= true;


    if (n==null){
        console.warn("n es null")
        return "n es null";}

    n=Number(n);
        if (isNaN(n)){
        console.warn("n es NaN")
        return "ese tal vez no sea un numero";}
    if (!(n%1===0)){
        return "ese no es un numero entero";}
    if ((n===0)){
        return "ese numero ES 0 o escribiste nada";}
    if ((n<1)){return "ese numero no es mayor de 0";}
    

        
    for (let i = 1; i <= n; i++) {
    if (i%3 === 0) { frase= frase+"Fizz"; flag= false;}
    if (i%5 === 0) { frase= frase+"Buzz"; flag= false;}
    if (flag) { frase= frase+String(i);}
    if(!(i===n))frase= frase+ " , ";
    flag=true;
}
return frase;
}




alert(fizzBuzz(n));