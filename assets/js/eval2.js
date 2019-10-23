// Exercice 7
//Prend en compte tous les caractères alphabétiques
var oneCaract = RegExp("[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+");
//Si code postal entrez mettre 5 chiffres
var numeric5 = RegExp("^[0-9]{5}$");
// 1 2 ou 3 chiffres pour adresse
var regexAdress = RegExp("^[0-9]{1,3}(?:\s[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]){2,}$");
 
var btnForm = document.getElementById("send");
var name = document.getElementById("nom");
var missName = document.getElementById("missName");
var fname = document.getElementById("fname")

btnForm.addEventListener("click", function(event){
    //Si le champ est vide
    if(name.validity.valueMissing){
        event.preventDefault();
        missName.textContent = "Nom manquant";
    //Si le format de données est incorrect
    }else if(!oneCaract.test(name.value)){
        event.preventDefault();
        missName = "Format incorrect";
    }
});