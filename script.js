function updateRate() 
{
    /*
    Updates the rate shown in the gui to match the value of the slider position.
    */
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}


function compute()
{
    /*
    Computes the amount of interest earned and writes it with the other 
    relevant information to the results element.
    */

    // Gathers element values each time compute is run. Prevents issues with the 
    // JS being loaded before the HTML. Could also handle this via an initialization
    // but here is quick and easy for this application
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * (rate / 100) * years;
    var year = new Date().getFullYear()+parseInt(years);
    var resultText;

    // Checks that the principal value is not empty and is greater than 0. 
    // Does not check if non-numbers or other potentially malicious values have snuck through
    // principal > 0 is enough on my system but included !="" for clarity and robustness
    // The numbers have not been formatted to display certain number of decimal places and 
    // will output more than two if there are more
    if (principal > 0 && principal != "") { 
        resultText = "If you deposit <mark>" + 
            principal + "</mark>,\<br\>at an interest rate of <mark>" +
            rate + "% </mark>\<br\>You will receive an amount of <mark>" +
            amount + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";
            document.getElementById("result").innerHTML=resultText; // write resulting text
    } else {
        alert("Enter a positive number");
        document.getElementById("principal").focus(); // return user to enter the principal amount again
    }
    return false
}

