function validarAlcool() {
    var precoAlcool = document.getElementById('alcool').value.trim();
    
    if (precoAlcool === "") { 
        alert("Por favor, preencha o preço do álcool!"); 
        return false;
    } 
    
    else if (isNaN(parseFloat(precoAlcool))) { 
        alert("O preço do álcool deve ser numérico!");
        return false;
    } 

    else {
        return true;
    }
}

function validarGasolina() {
    var precoGasolina = document.getElementById('gasolina').value.trim();
    
    if (precoGasolina === "") { 
        alert("Por favor, preencha o preço da gasolina!"); 
        return false;
    } 
    
    else if (isNaN(parseFloat(precoGasolina))) { 
        alert("O preço da gasolina deve ser numérico!");
        return false;
    } 

    else {
        return true;
    }
}

function validarForm() {
    var alcoolValido = validarAlcool();
    var gasolinaValida = validarGasolina();

    return alcoolValido && gasolinaValida;
}