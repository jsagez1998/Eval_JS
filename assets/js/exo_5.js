var nb = parseInt(prompt("Quel nombre multiplier ?"));

TableMultiplication(nb);

function TableMultiplication(number){
for(let i = 0; i != 11; i++){
    var res = i*number;
    console.log(i+" x "+number+" = "+res);
    }
}
    

