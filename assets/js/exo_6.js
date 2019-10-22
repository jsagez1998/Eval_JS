var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var name = prompt("Quel nom rechercher ?"); 
var pos = tab.indexOf(name);
if(pos < 0){
    alert("Le nom n'est pas présent dans le tableau");
}else{
    tab.splice(pos, 1);
    tab.push(""); 
    console.log(tab); 
}