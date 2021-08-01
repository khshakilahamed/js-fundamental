var tableLength = 12;
var tourDestinations = ['cox-bazar', 'nepal', 'vutan', 'paris'];


tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];
tourDestinations[1] = "Srilanka";

tourDestinations.push("Landan");

tourDestinations.pop();

if (tourDestinations[1] == 'nepal') {
    console.log("Pahare ahare ahare");
}
else if (tourDestinations[1] == 'china') {
    console.log("chaina tor kach ejamuna");
}
else if (tourDestinations.length = 4) {
    console.log("aro taka ache aro beshi jamu");
}
else {
    console.log("kothao jamu na basai thakmu mosa marmu");
}


var eggPrice = 32;
var myBudget = 20;
if (eggPrice <= myBudget) {
    console.log("ami dim khamu");
}
else if (eggPrice >= myBudget) {
    console.log("ami khamu na");
}
else {
    console.log("vat khamu");
}