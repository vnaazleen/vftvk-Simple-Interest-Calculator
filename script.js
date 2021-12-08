function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;

    var year = parseInt(new Date().getFullYear()) + parseInt(t)

    var A = p * r * t;
    var result = `If you deposit ${p},<br>
    at an interest rate of ${r}%.<br>
    You will recieve an amount of ${A}.<br>
    in the year ${year}
    `
    document.getElementById('result').innerHTML = result;
}

var selectYears = document.getElementById("years");
for (let i = 1; i <= 100; i++)
selectYears.innerHTML += "<option>" + i + "</option>";

document.getElementById('rate').onchange=function(){
    document.getElementById('value').innerHTML = this.value + "%";
};