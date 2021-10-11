function proiz()
{
    var num1,num2,rezult;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);// 5 - нормально, 5ф - не нормально, преобразует в 5 

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);


    rezult = num1*num2;
    //innerHTML
    document.getElementById('out').innerHTML = rezult;
}