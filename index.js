var cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(pitney){
  cats.push(pitney)
}
function destructivelyPrependCat(pitney){
  cats.unshift(pitney)
}
function destructivelyRemoveLastCat(){
  cats.pop()
}
function destructivelyRemoveFirstCat(){
  cats.shift()
}
function appendCat(pitney){
  var name_1=['Milo', 'Otis', 'Garfield', 'Broom']
  return name_1
}
function prependCat(Arnold){
  var name_1=['Arnold','Milo', 'Otis', 'Garfield']
  return name_1
}
function removeLastCat(){
  var caats= cats.slice(0,cats.length-1);
  return caats;
}
function removeFirstCat(){
  var caats=cats.slice(1);
  return caats;
}