function cramer(a,b,c,d,e,f,g,h,i,j,k,l){
    let delta=((a*f*k)+(b*g*i)+(c*e*j))-((i*f*c)+(j*g*a)+(k*e*b)) ;
    let dx=((d*f*k)+(b*g*l)+(c*h*j))-((l*f*c)+(j*g*d)+(k*h*b)) ;
    let dy=((a*h*k)+(d*g*i)+(c*e*l))-((i*h*c)+(l*g*a)+(k*e*d)) ;
    let dz=((a*f*l)+(b*h*i)+(d*e*j))-((i*f*d)+(j*h*a)+(l*e*b)) ;
    if(delta==0){
        if(dx==0 && dy==0 && dz==0){
            return ["x","("+(g*d)+"+"+(-a*g)+"x)/"+(g*b),"("+(f*d)+"+"+(-a*f)+"x)/"+(c*f)];
        }
        else{
            return [undefined,undefined,undefined] 
        }
    }
    else{
        let x=dx/delta; let y=dy/delta; let z=dz/delta ;
        return [x,y,z]
    }
}

function calcul(){
    let E=parseFloat(document.getElementById('e').value)*document.getElementById('unitee').value
    let R1=parseFloat(document.getElementById('r1').value)*document.getElementById('unite1').value
    let R2=parseFloat(document.getElementById('r2').value)*document.getElementById('unite2').value
    let R3=parseFloat(document.getElementById('r3').value)*document.getElementById('unite3').value
    let R4=parseFloat(document.getElementById('r4').value)*document.getElementById('unite4').value
    let r=/[0-9]+/
    if(!(r.test(E) && r.test(R1) && r.test(R2) && r.test(R3) && r.test(R4))){
        alert("Complétez les cases correspondants par des nombres réels");
        return 0;
    }
    const solution=cramer(R1+R4,R2,0,E,0,R2,-R3,0,1,-1,-1,0);
    let I1=solution[0]
    let I2=solution[1]
    let I3=solution[2]
    const U1=(R1*I1); const U2=(R2*I2); const U3=(R4*I1);
    document.write(`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circuit</title>
    <link rel="stylesheet" href="css/circuit.css">
</head>
<body>
    <p>Calcul des intesités passant par R1, R2 et R3 puis les tensions U<sub>AB</sub>, U<sub>BC</sub>, U<sub>CD</sub></p>
    <img src="images/circuit.png" alt="circuit">
    <p><br>Entrer les valeurs des résitances R1, R2, R3 et R4 : </p><br>
    <form>
        <label>Entrer la valeur de E &ThinSpace;&ThinSpace;&ThinSpace;:</label>
        <input type="number" id="e" value="${E}">
        <select name="unitee" id="unitee">
            <option value="1">V</option>
            <option value="0.001">mV</option>
        </select><br><br>
        <label>Entrer la valeur de R1 : </label>
        <input type="number" id="r1" value="${R1}">
        <select name="unite1" id="unite1">
            <option value="1">Ω</option>
            <option value="1000">kΩ</option>
            <option value="1000000">MΩ</option>
        </select><br><br>
        <label>Entrer la valeur de R2 : </label>
        <input type="number" id="r2" value="${R2}">
        <select name="unite2" id="unite2">
            <option value="1">Ω</option>
            <option value="1000">kΩ</option>
            <option value="1000000">MΩ</option>
        </select><br><br>
        <label>Entrer la valeur de R3 : </label>
        <input type="number" id="r3" value="${R3}">
        <select name="unite3" id="unite3">
            <option value="1">Ω</option>
            <option value="1000">kΩ</option>
            <option value="1000000">MΩ</option>
        </select><br><br>
        <label>Entrer la valeur de R4 : </label>
        <input type="number" id="r4" value="${R4}">
        <select name="unite4" id="unite4">
            <option value="1">Ω</option>
            <option value="1000">kΩ</option>
            <option value="1000000">MΩ</option>
        </select><br><br>
        <p id="sol">
        I4=I1=${I1.toFixed(6)} A<br>
        I2=${I2.toFixed(6)} A<br>
        I3=${I3.toFixed(6)} A<br>
        <br>
        U<sub>AB</sub>=${U1.toFixed(6)} V<br>
        U<sub>BC</sub>=${U2.toFixed(6)} V<br>
        U<sub>CD</sub>=${U3.toFixed(6)} V<br>
        <br></p>
        <button><a href="circuit.html" style="color:white; text-decoration: none;">Réinitialiser</a></button>
    </form><br><br>
    
    <footer>
        <ul>
            <li>RATSIMBAZAFY Fitahiana Christalin 1874 H-F</li>
            <li>FANOMEZANTSOA Tefiniaina 1875 H-F</li>
        </ul>
    </footer>

    <script src="js/circuit.js"></script>
</body>
</html>
    `)
}

