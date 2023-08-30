const pi = 3.141592;

function areaEsf(raio){
    return 4 * pi * raio**2;
}

function volumeEsf(raio){
    return (4/3) * pi * raio**3; 
}

raio = parseFloat(prompt("Informe o raio da esfera: "));
alert(`Área = ${areaEsf(raio).toFixed(2)} | Volume = ${volumeEsf(raio).toFixed(2)}`);
