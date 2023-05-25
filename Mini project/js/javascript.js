//form validation
function valid()
{
    //Name
    v1=document.getElementById("bx1");
    exp1=/^[a-z A-Z]{3,20}$/;
    if(v1.value=="")
    {
        alert("Enter your name")
        v1.focus();
        return false;
    }
    else if(exp1.test(v1.value)==false)
    {
       alert("Invalid Name")
        v1.focus();
        return false;
    }
    else
    {
        v1.focus();
    }
    //email
    v2=document.getElementById("bx2");
    exp2=/^[a-z A-Z @ . 0-9]{10,25}$/;
    if(v2.value=="")
    {
        alert("Enter your email")
        v2.focus();
        return false;
    }
    else if(exp2.test(v2.value)==false)
    {
       alert("Invalid email")
        v2.focus();
        return false;
    }
    else
    {
        v2.focus();
    }
    //textarea
    v3=document.getElementById("bx3");
    if(v3.value=="")
    {
        alert("Enter your some feedback")
        v3.focus();
        return false;
    }
    else
    {
        v3.focus();
    }
}