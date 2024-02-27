const btn = document.getElementById("btn");


btn.addEventListener('click',(e)=>
{
    let xx = document.getElementById("lo").value
    console.log(xx);
    // document.write(document.getElementById("lo"))
    // var x = document.getElementById("lo").value
    document.getElementById("demo").innerHTML = xx;
    console.log(xx)
})
