var x = document.getElementById("logshop")

x.onclick = function()
{
    let uniqid = prompt("Enter the uniqId");
    if(uniqid=="9921")
    {
        window.location.assign("ShopeReg.html");
    }
    else
    {
        alert("Invalid Id");
    }
}