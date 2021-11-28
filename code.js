
function play() {
    // this function above is the whole game of simple craps in just one segment

var die1 = 5
var die2 = 2
var sum = die1 + die2
    // lines 16, 17 and 18 define the three variables used in this function

document.write("Die 1 = " + die1)
document.write("<br/>")
    // lines 21 annd 22 output the value of die1 to the user and make a line break
document.write("Die 2 = " + die2)
document.write("<br/>")
    // lines 24 annd 25 output the value of die2 to the user and make a line break

document.write("Sum = " + sum)
document.write("<br/>")
    // lines 21 annd 22 output the value of die1 to the user and make a line break


if (sum == 7 || sum == 11)
    {    document.write("CRAPS - you lose")
         document.write("<br/>") }
    // this if statement shows what happens when if the sem of die1 and die2 

else if (die1== die2 && die1%2 == 0)
    {    document.write("DOUBLES - you win")
         document.write("<br/>") }
    // this else if statement shows what happens what will happen if die1 and die2 are equal and even
            } // thia curly bracket is the end of the function
    document.write("Simple Craps")
    document.write("<br/>")
    play()