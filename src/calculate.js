export default function calculate(obj){
    var msv = obj.firstFigure;
    var lsv = obj.secondFigure;
    var mult = obj.decimalMultiplier;
    var tol = obj.tolerance;
    var resistText = msv + lsv;
    for (var i=0; i<mult; i++) {
        resistText += "0";  // Append some 0's
    }
    resistText = addCommas(resistText); // Insert commas
    resistText += " \u2126 \u00B1"; // Add ohm, space, plus/minus sign
    if (tol === "10")
        resistText += "5%";
    else if (tol === "11")
        resistText += "10%";

    obj.ohmValueText = resistText;
    return obj;
}

function addCommas(x) {
// This handy function found here:
// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}