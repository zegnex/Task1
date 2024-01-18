/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function convert(event) {
    event.preventDefault();
    
    var kg = parseFloat(document.getElementById("kgInput").value);
    
    var lb = kg * 2.20462;
    var g = kg * 1000;
    var oz = kg * 35.27396;
    
    var result = kg + " KG is equal to " + lb.toFixed(2) + " LB, " + g.toFixed(2) + " G, and " + oz.toFixed(2) + " OZ.";
    
    document.getElementById("result").innerHTML = result;
  }