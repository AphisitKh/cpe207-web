console.log('this is my 1st JS111');

var str = '';
for(var i=0; i<10;i++){
    console.log(i+1);
    str += (i+1) + '<br>';
}

document.querySelector('#output').innerHTML = str;