//Exercice 1
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

//---------------------------------------------------------------------------------------------------------------
//Exercice 2

//Variables
var btnExo2 = document.getElementById("btnExo2");
btnExo2.addEventListener("click", function(){
    var N = parseInt(prompt("Entrez un nombre"));
    var sum = 0; 

    //Tant que N est différent de 0
    while(N !=0){
        N--; // On passe au nombre inférieur
        sum += N; // on l'additionne à la somme actuelle
    }

    alert(sum);
});

//------------------------------------------------------------------------------------------------------------------------
//Exo 3

//Variables
var btnExo3 = document.getElementById("btnExo3");

btnExo3.addEventListener("click", function(){
    var sum=0;
    var nb=0;
    var tab=new Array();
    var min=0;
    var max=0;

    do{ //Faire la boucle
        nb=parseInt(prompt("Entrez une valeur ou 0 pour stopper la saisie"));
        if(nb!=0){
            tab.push(nb); // Ajouter à la fin du tableau
            sum+=nb;
            if(0==min){ // Si on n'a pas encore de minimum
                min=nb;
            }else if(min > nb){
                    min = nb;
            }
            
            if(0==max){
                max=nb;
            }else if(max < nb){
                    max = nb;
            }
        }
    }while(nb!=0); // Tant que nb différent de 0

    var i=tab.length;
    var average=sum/i;

    alert(i+" nombre(s) saisi(s)\n Minimum : "+min+"\nMaximum : "+max+"\n Somme : "+sum+"\nMoyenne : "+average);

});
//------------------------------------------------------------------------------------------------------------------------
//Exercice 4

var btnExo4 = document.getElementById("btnExo4");

    btnExo4.addEventListener("click", function(){
    //Variables
    //compteur -20ans
    var count20 = 0;
    //compteur +40ans
    var count40 = 0;
    // compteur entre 20 et 40
    var countbtwn =0;

    do{
        var age = parseInt(prompt("Saisissez un âge (Un âge centenaire stoppe la saisie)"));
        if(age < 20){
            count20++;
        }else if(age > 40){
            count40++;
        }else{
            countbtwn++;
        }
    }while(age < 100)

    alert("- de 20 ans : "+count20+"\n + de 40 ans : "+count40+"\n Entre 20 et 40 : "+countbtwn);
});
//------------------------------------------------------------------------------------------------------------
//Exercice 5

var btnExo5 = document.getElementById("btnExo5");

btnExo5.addEventListener("click", function(){
    var nb = parseInt(prompt("Quel nombre multiplier ?"));
    //Appel de la fonction par event
    TableMultiplication(nb);
});

function TableMultiplication(number){
    for(let i = 0; i != 11; i++){
        var res = i*number;
        console.log(i+" x "+number+" = "+res);
        }
}
//------------------------------------------------------------------------------------------------------------------
//Exercice 6

var btnExo6 = document.getElementById("btnExo6");

btnExo6.addEventListener("click", function(){
    var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
    var name = prompt("Quel nom rechercher ?"); 
    var pos = tab.indexOf(name); //recherche la position de la chaine de caractère recherché
    if(pos < 0){ //si -1 la chaine n'existe pas ds le tableau
        alert("Le nom n'est pas présent dans le tableau");
    }else{
        tab.splice(pos, 1); // On supprimer 1 élément à partir de la position
        tab.push(""); // on ajoute un blanc en fin de tableau
        console.log(tab); 
}
});
//------------------------------------------------------------------------------------------------------------------------
// Exercice 7
//Prend en compte tous les caractères alphabétiques
var oneCaract = RegExp("[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+");
//Si code postal entrez mettre 5 chiffres
var numeric5 = RegExp("^[0-9]{5}$");
// 1 2 ou 3 chiffres pour adresse
var regexAdress = RegExp("^[0-9]{1,3}(?:\s[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]){2,}$");
 
var btnForm = document.getElementById("ok");
var name = document.getElementById("nom");
var fname = document.getElementById("prenom");
var cp = document.getElementById("cpostal");
var adress = document.getElementById("adresse");
var city = document.getElementById("ville");
var question = document.getElementById("question");
var missName = document.getElementById("missName");
var missFname = document.getElementById("missFname");
var missCity = document.getElementById("missCity");
var missQuestion = document.getElementById("missSujet");
btnForm.addEventListener("click", function(){

    
});