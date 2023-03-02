function anjam(){
    let nrxiAmro=document.getElementById('input_1').value
    let dolar=document.getElementById('input_2').value
    let dinnar=document.getElementById('input_3').value
    let dolardabash=nrxiAmro/100;
    if (!isNaN(parseFloat(nrxiAmro))) {
      if (!isNaN(parseFloat(dolar))) {
        document.getElementById("here").innerHTML="دینار"+dolardabash*dolar
        console.log(dolardabash*dolar)
      }
      else if(!isNaN(parseFloat(dinnar))) {
        document.getElementById('here').innerHTML= dinnar*100/nrxiAmro+'$'
      } 
    }
  }