

function generer_password(){
    var res= document.querySelector("#resultat");
    let ok = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN@$#*![:punct]';
    let mdp='';
    var input = document.getElementById("in").value;
        for(i=0;i<input;i++){
            
            var transfo = Math.round(Math.random()*ok.length);
            
            mdp+=ok.substring(transfo,transfo+1);
        }

    res.innerHTML = mdp 


}