var res= document.querySelector("#resultat");
function generer_password(){



let ok = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN[:punct]';
let mdp='';

longueur = 15;
    for(i=0;i<longueur;i++){
        
        var transfo = Math.round(Math.random()*ok.length);
        
        mdp+=ok.substring(transfo,transfo+1);
}

res.innerHTML = mdp 


}