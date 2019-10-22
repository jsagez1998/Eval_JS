var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var name = prompt("Quel nom rechercher ?"); 
var pos = tab.indexOf(name);
tab.splice(pos, 1);
tab.push(""); 
console.log(tab); 