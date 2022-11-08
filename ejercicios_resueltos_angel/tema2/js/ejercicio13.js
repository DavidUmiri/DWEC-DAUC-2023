function esBisiesto(n1)
{
    document.getElementById("c1").innerHTML=n1;
    if(n1%4===0 && n1%400===0)
    {
        document.getElementById("c2").innerHTML=1;
        return 1;
    }
    else{
        document.getElementById("c2").innerHTML=0;
        return 0;
    }
}

