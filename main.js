function valueButton(e){
    calc.screen.value += e.value;
}
function clearNumber(){
    calc.screen.value = " ";
}
function Result(){
    calc.screen.value = eval(calc.screen.value);
}