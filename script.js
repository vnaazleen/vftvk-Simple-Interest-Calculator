function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;

    if(p <= 0) {
        alert("Amount should be greater than 0!")
        return
    }

    var year = parseInt(new Date().getFullYear()) + parseInt(t)

    var A = p * r * t / 100;
    var result = `If you deposit <span class="sol">${p}</span>,<br>
    at an interest rate of <span class="sol">${r}%</span>.<br>
    You will recieve an amount of <span class="sol">${A}</span>.<br>
    in the year <span class="sol">${year}</span>
    `
    document.getElementById('result').innerHTML = result;
}

var selectYears = document.getElementById("years");
for (let i = 1; i <= 100; i++)
selectYears.innerHTML += "<option>" + i + "</option>";

document.getElementById('rate').onchange=function(){
    document.getElementById('value').innerHTML = this.value + "%";
};