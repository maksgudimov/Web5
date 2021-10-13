function proiz()
{
    var num1,num2,rezult;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);// 5 - нормально, 5ф - не нормально, преобразует в 5 

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
  
    var reg = /[A-Za-zА-Яа-яЁё]/g;
    
    if(reg.test(num1)||reg.test(num2) || num1<0||num2<0)
    {
        alert('Вводить можно только положительные числа числа!'); 
    }
    if(num1===0||num2===0)   
    {
        alert('Введите значения!');
    }
   

    rezult = num1*num2;

    if(rezult<=0)
    {
        alert('Ошибка! Результат не может иметь отрицательное значение или 0');
        let str = "Ошибка!";
        document.getElementById('out').innerHTML = str;
    }
    //innerHTML
    else
    {
    document.getElementById('out').innerHTML = rezult;
    }
}
 window.addEventListener('DOMContentLoaded', function (proiz) {
     console.log("DOM fully loaded and parsed");
     let b = document.getElementById("result-btn");
     b.addEventListener("click", proiz);
  });