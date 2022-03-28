
function MakeText(){
    var text = 'Najbolje za vas dom';
    var text1 = 'Najbolji odnos cene i kvaliteta';
    var text2 = 'Veoma efikkasni u svom poslu';

    var stext = text.split('');
    var stext1 = text1.split('');
    var stext2 = text2.split('');

    var nasArray = [stext,stext1,stext2];

    return nasArray;

}
var type = document.getElementById('type');
var ar = MakeText();
var i=0;
var loop;

function start(){
    if(ar[i].length > 0){
        type.innerHTML += ar[i].shift();
        loop = setTimeout(start,200);
    }else{
        var ss = setTimeout(sleep,1500);
    }
}

function sleep(){
    i++;
    if(i > 2){
        i=0;
        ar = MakeText();
    }
    type.innerHTML = "";
    start();
}

start();