var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedwell = true;

// -------------------- if, else if, else -----------
// if (danishPrice < myBudget) {
//     console.log("Danish kyeye danish jab");
// }
// else if (butterBreadPrice < myBudget) {
//     console.log("Butter bon diye cha khamu");
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log("Toast biscuit khamu");
// }
// else {
//     console.log("Batasha diye cha khamu");
// }


// ------------- Nested conditon -----------------
if (danishPrice < myBudget) {
    if (packedwell == true) {
        console.log("danish khabo");
    }
    else {
        console.log("danish khabo na! kharon masi ordek kheye felche");
    }
}