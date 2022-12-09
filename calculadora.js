
function suma(){

    let n1 = parseFloat( document.getElementById('numero1').value);
    let n2 = parseFloat( document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        
        resultado.innerHTML='Ingrese los numeros';
        const error = document.querySelector('.resultado');
        error.classList.add("alert","alert-danger");
    
    }else{

        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1+n2;

        resultado.innerHTML='la Suma de: ' + n1 + " + " + n2 + " es " + total;
        const correcto = document.querySelector('.resultado');
        error.classList.add("alert", "alert-succes");
    }
}

function resta(){

    let n1 = parseFloat( document.getElementById('numero1').value);
    let n2 = parseFloat( document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        
        resultado.innerHTML='Ingrese los numeros';
        const error = document.querySelector('.resultado');
        error.classList.add("alert","alert-danger");
    
    }else{

        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1-n2;

        resultado.innerHTML='la Resta de: ' + n1 + " - " + n2 + " es " + total;
        const correcto = document.querySelector('.resultado');
        error.classList.add("alert", "alert-succes");
    }
}

function multiplicacion(){

    let n1 = parseFloat( document.getElementById('numero1').value);
    let n2 = parseFloat( document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        
        resultado.innerHTML='Ingrese los numeros';
        const error = document.querySelector('.resultado');
        error.classList.add("alert","alert-danger");
    
    }else{

        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1*n2;

        resultado.innerHTML='la Multiplicacion de: ' + n1 + " * " + n2 + " es " + total;
        const correcto = document.querySelector('.resultado');
        error.classList.add("alert", "alert-succes");
    }
}

function division(){

    let n1 = parseFloat( document.getElementById('numero1').value);
    let n2 = parseFloat( document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        
        resultado.innerHTML='Ingrese los numeros';
        const error = document.querySelector('.resultado');
        error.classList.add("alert","alert-danger");
    
    }else{

        const error = document.querySelector('.resultado');
        error.classList.remove("alert", "alert-danger");
        let total = n1/n2;

        resultado.innerHTML='la Division de: ' + n1 + " / " + n2 + " es " + total;
        const correcto = document.querySelector('.resultado');
        error.classList.add("alert", "alert-succes");
    }
}