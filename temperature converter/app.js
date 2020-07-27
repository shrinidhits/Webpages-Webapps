var cel=document.querySelector('#celsius > input');
var far=document.querySelector('#farenheit > input');
var kel=document.querySelector('#kelvin > input');

cel.addEventListener('input',function(){
    var celsius=parseFloat(cel.value);
    var faren= (celsius*(9/5))+32;
    var kelvin=celsius+273.15;
    far.value=faren;
    kel.value=kelvin;
});

far.addEventListener('input',function(){
    var faren=parseFloat(far.value);
    var celsius= (faren-32)*(5/9);
    var kelvin=celsius+273.15;
    cel.value=celsius;
    kel.value=kelvin;
});

kel.addEventListener('input',function(){
    var kelvin=parseFloat(kel.value);
    var celsius= kelvin-273.15;
    var faren=(celsius*(9/5))+32;
    cel.value=celsius;
    far.value=faren;
});

