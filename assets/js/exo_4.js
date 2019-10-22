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