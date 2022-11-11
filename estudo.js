function moeda(atual){
  return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function total(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if(!Number(c)){
      alert("O valor do capital deve ser um número.");
      document.getElementById("valor").value = "";
      document.getElementById("valor").focus();
      return
    }
    if(!Number(j)){
      alert("O valor do juros deve ser um número.");
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus();
      return
    }
    if(!Number(t)){
      alert("O valor do meses deve ser um número.");
      document.getElementById("meses").value = "";
      document.getElementById("meses").focus();
      return
    }
    let m = 0;
    let texto = " ";
    for(let i = 1; i <= t; i++){
        m = c * (1 + (j/100));
        texto += i + " : " + moeda(m) + "<br>"
        //document.write("Mês " + i + " = " + m + "<br>");
        c = m;
  }
  document.getElementById("ListaMes").innerHTML = texto;
  document.getElementById("total").innerHTML = moeda(m);
  //document.write("Montante: " + m);
}
function calculaRaiz(){
   let a = document.getElementById("a").value;
   let b = document.getElementById("b").value;
   let c = document.getElementById("c").value;
   let delta = (b*b) - (4*a*c);
   let raiz;
   if(delta >= 0){
      raiz = Math.sqrt(delta);
      x1 = ((-b)-raiz)/(2*a);
      x2 = ((-b)+raiz)/(2*a);
      raiz = "x1="+x1+" x2="+x2;
   }else{
 
   }
   document.getElementById("raiz").innerHTML = raiz;
  }
  
