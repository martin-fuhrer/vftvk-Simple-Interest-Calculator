function compute()
{
    var principal = document.getElementById("principal").value;
    if (!principal || (principal <= 0)) {
        // principal must always be a positive number
        alert("Enter a positive number");
        // set focus to principal input field and return
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculate the interest
    var interest = principal * years * rate /100;
    // calculate when the interest will be reached
    var year = new Date().getFullYear() + parseInt(years);
    // replace any previous result with the new result
    document.getElementById("result").innerHTML =
        "If you deposit " +
        "\<mark\>" + principal + "\</mark\>" +
        ",\<br\>at an interest rate of " +
        "\<mark\>" + rate + "%\</mark\>" +
        "\<br\>You will receive an amount of " +
        "\<mark\>" + interest + "\</mark\>" +
        ",\<br\>in the year " +
        "\<mark\>" + year + "\</mark\>" +
        "\<br\>"

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    // show the selected value
    document.getElementById("rate_val").innerText = rateval;
}
