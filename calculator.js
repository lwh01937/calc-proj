const numberOne = document.getElementById('1');
const numberTwo = document.getElementById('2');
const numberThree = document.getElementById('3');
const numberFour = document.getElementById('4');
const numberFive = document.getElementById('5');
const numberSix = document.getElementById('6');
const numberSeven = document.getElementById('7');
const numberEight = document.getElementById('8');
const numberNine = document.getElementById('9');
const numberZero = document.getElementById('0');
const numberDel = document.getElementById('del');
const numberAc = document.getElementById('ac');
const numberAdd = document.getElementById('+');
const numberMinus = document.getElementById('-');
const numberDivide = document.getElementById('/');
const numberMultiply = document.getElementById('*');
const numberDot = document.getElementById('.');
const numberEqual = document.getElementById('=');

const inputElement = document.getElementById('inputBar');


    
    numberOne.addEventListener('click', function() {
        const newText = "1";
        inputElement.value += newText;
    });

    numberTwo.addEventListener('click', function() {
        const newText = "2";
        inputElement.value += newText;
    });

    numberThree.addEventListener('click', function() {
        const newText = "3";
        inputElement.value += newText;
    });

    numberFour.addEventListener('click', function() {
        const newText = "4";
        inputElement.value += newText;
    });

    numberFive.addEventListener('click', function() {
        const newText = "5";
        inputElement.value += newText;
    });

    numberSix.addEventListener('click', function() {
        const newText = "6";
        inputElement.value += newText;
    });

    numberSeven.addEventListener('click', function() {
        const newText = "7";
        inputElement.value += newText;
    });

    numberEight.addEventListener('click', function() {
        const newText = "8";
        inputElement.value += newText;
    });

    numberNine.addEventListener('click', function() {
        const newText = "9";
        inputElement.value += newText;
    });

    numberZero.addEventListener('click', function() {
        const newText = "0";
        inputElement.value += newText;
    });

    numberDel.addEventListener('click', function() {
        const currentValue = inputElement.value;
        if (currentValue.length > 0) {
            inputElement.value = currentValue.slice(0, -1); 
        }
    });

    numberAc.addEventListener('click', function() {
        const newText = "";
        inputElement.value = newText;
    });

    numberAdd.addEventListener('click', function() {
        const newText = "+";
        inputElement.value += newText;
    });

    numberMinus.addEventListener('click', function() {
        const newText = "-";
        inputElement.value += newText;
    });

    numberDivide.addEventListener('click', function() {
        const newText = "/";
        inputElement.value += newText;
    });

    numberMultiply.addEventListener('click', function() {
        const newText = "*";
        inputElement.value += newText;
    });

    numberDot.addEventListener('click', function() {
        const newText = ".";
        inputElement.value += newText;
    });

    numberEqual.addEventListener('click', function() {
        inputElement.value = eval(inputElement.value);
    });