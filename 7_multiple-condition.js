var gotJob = true;
var moneySaved = 150000;
var hasFlat = false;
var hasHouse = true;


// --------- and (&&) operation -----------
// if (gotJob == true && moneySaved > 200000) {
//     console.log("cholo biye kore feli !!!");
// }
// else {
//     console.log("tor kopale biye nai ");
// }


// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log("cholo biye kore feli !!!");
// }
// else {
//     console.log("tor kopale biye nai ");
// }


// ----------------- or(||) operation -------------
// if (gotJob == true && moneySaved > 200000) {
//     console.log("cholo biye kore feli !!!");
// }
// else {
//     console.log("tor kopale biye nai ");
// }


// ----------------- and(&&) + or(||) operation -------------
if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log("cholo biye kore feli !!!");
}
else {
    console.log("tor kopale biye nai ");
}