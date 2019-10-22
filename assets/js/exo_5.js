var nb = parseInt(prompt("Afficher la table de quel nombre ?"));

for(let i = 0; i != 11; i++){
    var res = i*nb;
    console.log(i+" x "+nb+" = "+res);
}