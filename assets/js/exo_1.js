//Prix unitaire
var PU = parseInt(prompt("Entrez le prix du produit"));
//Quantité commandée
var QTECOM = parseInt(prompt("Entrez la quantité"));
//Prix à payer
var PAP = PU*QTECOM;
//Port
var PORT;
//Remise
var REM;
//Total
var TOT = PAP - REM/100 + PORT;
//Si PAP > 500 port = 0
if(PAP < 500){
    PORT = 0;
}else{
    PORT = PAP*0.02;
    // PORT >=6
    if(PORT < 6){
        PORT = 6;
    }
}

// Si 100 < PAP < 200 REM =5% sinon REM = 10% 
if(PAP >= 100 && PAP <=200){
    REM = 5;
}else{
    REM = 10;
}

alert("Le prix est de "+PAP+"€ avec "+REM+"% de remise et "+PORT+"€ de port donc un total de "+TOT+"€");