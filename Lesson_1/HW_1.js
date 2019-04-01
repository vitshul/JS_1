"use strict"
/*!!!!!!   Задание 1*/

var a=10;
var b=2;

var sum=a+b;
var razn=a-b;
var proizv=a*b;
var del=a/b;

/*!!!!!!   Задание 2*/
a=17;
b=10;
var c = a-b;
var d = 7;
var result = c+d;

/*!!!!!!   Задание 3 - СТРОКИ*/

/*!!!!!!   Задание 3.1  !!!!*/
var secHour= 60*60;
var secDay= secHour*24;
var secMonth1= secDay*30;
var secMonrh2=secDay*31;

/*!!!!!!   Задание 3.2  !!!!*/
var Date = new Date();
var hour  = Date.getHours();
var minut = Date.getMinutes();
var second = Date.getSeconds()


/*!!!!!!   Задание 3.3  !!!!*/

var perem=prompt("Введите значение числа \'perem\' для возведения в квадрат");
perem*=perem;

var number = 1;
number += 12;
number -= 14;
number *= 5;
number /= 7;
number += 1;
number -= 1;
/*alert(number);*/

var RESULT = 'ЧИСЛА\n' +
    'Задание 1 \n a + b = '+sum+'\n a - b = '+razn+'\n a * b = '+proizv+'\n a / b = '+del+
    '\nЗадание 2 \n result = '+result+
    '\nСТРОКИ'+
    '\nЗадание 3.2 \n'+
    'В часе - '+secHour+' секунд, в сутках - '+secDay+' секунд, в месяце - '+secMonth1+' или '+secMonrh2+' секунд.'+
    '\nЗадание 3.2 \n'+
    'Текущее время : '+hour+':'+minut+':'+second+
    '\nЗадание 3.3 \n'+
    'Число \'perem\' в квадрате = '+perem+
    '\nЗадание 3.4 \n'+
    'Код с использованием сокращенной записи операций:\n'+
    `var number = 1;
number += 12;
number -= 14;
number *= 5;
number /= 7;
number += 1;
number -= 1;
alert(number);`+
    '\n Результат: number = '+number;


/*
alert('ЧИСЛА\n' +
               'Задание 1 \n a + b = '+sum+'\n a - b = '+razn+'\n a * b = '+proizv+'\n a / b = '+del+
             '\nЗадание 2 \n result = '+result+
         '\nСТРОКИ'+
               '\nЗадание 3.2 \n'+
                 'В часе - '+secHour+' секунд, в сутках - '+secDay+' секунд, в месяце - '+secMonth1+' или '+secMonrh2+' секунд.'+
              '\nЗадание 3.2 \n'+
                    'Текущее время : '+hour+':'+minut+':'+second+
                '\nЗадание 3.3 \n'+
                     'Число \'perem\' в квадрате = '+perem+
                 '\nЗадание 3.4 \n'+
                      'Код с использованием сокращенной записи операций:\n'+
`var number = 1;
number += 12;
number -= 14;
number *= 5;
number /= 7;
number += 1;
number -= 1;
alert(number);`+
        '\n Результат: number = '+number    );*/

alert(RESULT);

document.getElementById('write').value=RESULT;
