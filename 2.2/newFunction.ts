export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return "true";
    } else if (myNum < 5 && myNum >= 0) {
        return "false";
    } else if (myNum > 5) {
        return "big";
    } else {
        return "negative";
    }
}
// i dont understand any of this. im just trying to see if i can only push this 1 file instead of all