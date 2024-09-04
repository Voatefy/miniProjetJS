function resolution(a,b,c){
   if(a==0){
       if(b==0){
           if(c==0){
               return ["R","]-∞,+∞["];
           }
           else{
               return [undefined,undefined]
           }
       }
       else{
           return [-c/b,-c/b]
       }
   }
   else{
       let delta=(b**2)-(4*a*c) ;
       if(delta<0){
           return [undefined,undefined]
       }
       else if(delta==0){
           return [-b/(2*a),-b/(2*a)]
       }
       else{
           return [(-b-(delta**(1/2)))/(2*a),(-b+(delta**(1/2)))/(2*a)]
       }
   }
}
function rectif(str){
   str=str.replace(/\+\-|\-\+/g,"-")
   str=str.replace(/\+1x/g,"+x");
   str=str.replace(/\-1x/g,"-x");
   str=str.replace(/^1x²/g,"x²")
   str=str.replace(/^0x²/g,"")
   str=str.replace(/\-0x/g,"-");
   str=str.replace(/\+0x/g,"+");
   str=str.replace(/x.0=/g,"x=");
   str=str.replace(/x².0=/g,"x²=");
   str=str.replace(/^\+/g,"")
   str=str.replace(/\+\+/g,"+")
   str=str.replace(/\+\-|\-\+/g,"-")
   return str;
}
function resoudre(){
   a=parseFloat(document.getElementById('a').value)
   b=parseFloat(document.getElementById('b').value)
   c=parseFloat(document.getElementById('c').value)
   let r=/[0-9]+/
   if(!(r.test(a) && r.test(b) && r.test(c))){
       document.getElementById('res').textContent=" Complétez les cases correspondants par des nombres réels";
       document.getElementById('res').style.color="red"
       document.getElementById('resultat1').textContent="";
       document.getElementById('resultat2').textContent=""
       return 0;
   }

   t=resolution(a,b,c);
   switch(t[0]){
       case "R" : 
           document.getElementById('res').textContent=`L'équation admet une infinité de solution`
           document.getElementById('res').style.color="bleu"
           document.getElementById('resultat1').textContent="S=]-∞,+∞[";
           document.getElementById('resultat2').textContent=""; break;
       case undefined : 
           document.getElementById('res').textContent=`L'équation ${rectif(a+"x²+"+b+"x+"+c+"=0")} n'a pas de solution dans R`
           document.getElementById('res').style.color="bleu"
           document.getElementById('resultat1').textContent="soution vide";
           document.getElementById('resultat2').textContent="";break;
       default : 
           if ( +t[0].toFixed(6) === +t[1].toFixed(6)){
               document.getElementById('res').textContent=`La (les) solution(s) de l'équation ${rectif(a+"x²+"+b+"x+"+c+"=0")} sont : `
               document.getElementById('res').style.color="greenyellow"
               document.getElementById('resultat1').textContent="x = "+t[0].toFixed(6);
               document.getElementById('butt1').style.visibility="visible";
           }
           else{
               document.getElementById('res').textContent=`La (les) solution(s) de l'équation ${rectif(a+"x²+"+b+"x+"+c+"=0")} sont : `
               document.getElementById('res').style.color="greenyellow"
               document.getElementById('resultat1').textContent="x' = "+t[0].toFixed(6);
               document.getElementById('resultat2').textContent="x\" = "+t[1].toFixed(6);
               document.getElementById('butt1').style.visibility="visible";
               document.getElementById('butt2').style.visibility="visible";
           }
   }
}