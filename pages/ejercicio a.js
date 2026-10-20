let masa = Number(prompt("¿Cuanto pesas en kg?"));
if (masa < 0){alert("¿Eres de antimateria? tu peso fue negativo")} 
let altura= Number(prompt("¿Cuanto mides?"));
if (masa < 0){alert("¿Eres subterraneo? tu altura fue negativa")} 
function Imc (a,b) {
    let mc= a/(b*b)
    if (mc >= 30){ return `obesidad 
imc:  ${mc}`}
    if (mc < 0){ return `peso imposible 
imc:  ${mc}`}
    if (mc < 18.5){ return `bajo peso 
imc:  ${mc}`}
    if (mc < 25){ return `normal 
imc:  ${mc}`}
    return `sobrepeso 
imc:  ${mc}`    
}

alert(Imc(masa,altura));