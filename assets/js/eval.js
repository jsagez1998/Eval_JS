//Variables
var btnExo1 = document.getElementById("btnExo1");

btnExo1.addEventListener("click", function(){
    //Prix unitaire
    var PU = parseInt(prompt("Entrez le prix du produit"));
    //Quantité commandée
    var QTECOM = parseInt(prompt("Entrez la quantité"));
    //Prix à payer
    var PAP = PU*QTECOM;
    //Port
    var PORT = 0;
    //Remise
    var REM = 0;
    //Total
    var TOT = 0;
    //Si PAP > 500 port = 0
    if(PAP < 500){
        PORT += 0;
    }else{
        PORT = PAP*0.02;
        // PORT >=6
        if(PORT < 6){
            PORT += 6;
        }
    }
    
    // Si 100 < PAP < 200 REM =5% sinon REM = 10% 
    if(PAP >= 100 && PAP <=200){
        REM += 5;
    }else{
        REM += 10;
    }
    
    TOT = PAP-REM/100+PORT;
    alert("Le prix est de "+PAP+"€ avec "+REM+"% de remise et "+PORT+"€ de port donc un total de "+TOT+"€");
});