var sum=0;
var nb=0;
var tab=new Array();
var min=0;
var max=0;

do{
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
}while(nb!=0);

var i=tab.length;
var average=sum/i;

alert(i+" nombre(s) saisi(s)\n Minimum : "+min+"\nMaximum : "+max+"\n Somme : "+sum+"\nMoyenne : "+average);