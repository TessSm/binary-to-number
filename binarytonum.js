b.addEventListener('click', function(){
function convert(){
  var bi = document.getElementById('input').value;
  var biArr = bi.split('');
  biArr = biArr.reverse();
  var final = [];
  var pickle = [];
  for (i=0; i<biArr.length; i++){
    var banana = parseInt(biArr[i]);
    pickle.push(banana);
    var tomato = (Math.pow(2, i));
    var potato = tomato*pickle[i];
    final.push(potato);
  }
  var final2 = 0;
  for (a=0; a<final.length; a++){
    final2 = final2 + final[a];
  }
  document.getElementById('h1').innerHTML = final2;
  } 
  convert()
})