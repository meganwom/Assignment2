//Assignment 2-part 1
/*STEP 1: Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.*/

    /*var name = window.prompt("Please enter your name:");
    window.alert("Your name has " + name.length + " characters.");*/

/*STEP 2: Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result. */

    /*var name = window.prompt("Please enter your full name:");
    var i = window.prompt("Enter a number to select a letter");
    window.alert("The letter " + name.charAt(i) + " is at position " + i + ".");*/

/*STEP 3: Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result. */

    /*var firstName = window.prompt("Please enter your first name:");
    var lastName = window.prompt("Please enter your last name:"megan);
    window.alert("Your name is: " + firstName + " " + lastName + ".");*/

/*STEP 4: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”. */

    /*var foxInfo = "The quick brown fox jumps over the lazy dog.";
    window.alert("The index of " + foxInfo.indexOf("fox") + " relates to " + foxInfo.slice(16,19) + ".");*/

/*STEP 5: Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”. */

    /*var foxInfo = "The quick brown fox jumps over the lazy fox.";
   window.alert("The last instance of the word \"fox\" is: " + foxInfo.lastIndexOf("fox") + ".");*/

/*S/*TEP 6: Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result. */

    /*var foxInfo = "The quick brown fox jumps over the lazy dog.";
    var fullName = window.prompt("What is your full name?");
    window.alert((foxInfo.replace("the lazy dog", fullName)));

/*STEP 7: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result. */

    /*var foxInfo = "The quick brown fox jumps over the lazy dog.";
    window.prompt("What word you like to search for?");
    window.alert(foxInfo.search(/jumps/g));*/

/*STEP 8: Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string. */

    /*var oldString = "The quick brown fox jumps over the lazy dog.";
    var newString = oldString.slice(30, 43);
   window.alert(newString.toLocaleUpperCase());*/

/*STEP 9: Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off. */

    /*var oldString = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG            ";
    window.alert(oldString.trim().toLocaleLowerCase());*/

/*STEP 10: Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert. */

    /*var initCap = "the quick brown fox jumps over the lazy dog.";
    var capitalized = window.alert(initCap.charAt(0).toUpperCase() + initCap.substring(1));*/

//Assignment 2 - Part 2
//Part 1 - Math and Math Functions 
/*STEP 1: Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.*/

    /*var absoluteValue = window.prompt("Enter a number:");
    window.console.log(Math.abs("The absolute value is " + absoluteValue));*/

/*STEP 2: Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.*/

    /*var roundedValue = window.prompt("Enter any decimal number:");
    window.console.log(Math.ceil("The rounded up value is " + roundedValue));*/

/*STEP 3: Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.*/

    /*var roundedValue = window.prompt("Enter any decimal number:");
    window.console.log(Math.floor("The rounded down value is " + roundedValue));*/

/* STEP 4: Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.*/

    /*var numInput = prompt("Enter a series of numbers with commas in between each:");
    var numArray = numInput.split(",");
    window.console.log(Math.min.apply(null, numArray));
    window.console.log(Math.max.apply(null, numArray));*/
    
/*STEP 5: Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. */

    /*var squareRoot = window.prompt("Enter any number:");
    window.console.log(Math.sqrt("The square root is " + squareRoot));*/

//Part 2 - Date and Date Functions  
/*STEP 6: Create an application that gets the current date. Display that result within the console window.*/

    /*var d = new Date();
    window.console.log(d.toDateString());*/

/*STEP 7: Create an application that gets the number of days in a month. Display that result within the console window.*/

    /*function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    };
    for(var  i = 2010; i < 2016; i++) {
        window.console.log(i + ': ' + daysInMonth(2, i));
    };*/

/*STEP 8: Create an application that gets the month name from a particular date. Display that result within the console window.*/

        /*var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date();
    window.console.log("The current month is " + monthNames[d.getMonth()]);*/

/*STEP 9: Create an application that tests whether a date is a weekend. Display that result within the console window.*/

    /*var d = new Date('2012-08-26');
    if(d.getDay() === 6){
        window.console.log("Weekend")
    };
    if(d.getDay() === 0){ 
        window.console.log("Weekend")
    };*/

/*STEP 10: Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.*/

    /*var d = new Date();
    var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    window.console.log("Yesterday was " + weekday[d.getDay()-1]);*/
    
/*STEP 11: Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.*/

    /*var d = new Date();
    var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    window.console.log(weekday[d.getDay()].charAt(0));*/

//Part 3 - Conditional Logic and Looping Operations  
/*STEP 12: Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.*/

    /*var num1 = window.prompt("Enter a number:");
    var num2 = window.prompt("Enter another number:");
    window.console.log("The maximum number entered is " + Math.max(num1,num2));*/

/*STEP 13: Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
Student Name	Marks
Ursula	80
Paul	77
Henry	88
Tabitha	95
Lucy	68
The grades are computed as follows:
Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/

    /*var grades = [];
    grades["Ursula"] = 80;
    grades["Paul"] = 77;
    grades["Henry"] = 88;
    grades["Tabitha"] = 95;
    grades["Lucy"] = 68;
//FINAL
    for(student in grades){
        if (grades[student] <= 59) {
            window.console.log(student + "'s grade is: F");
        };
        if ((grades[student] >= 60) && (grades[student] <= 69)) {
            window.console.log(student + "'s grade is: D");
        };
        if ((grades[student] >= 70) && (grades[student] <= 79)) {
            window.console.log(student + "'s grade is: C");
        };
        if ((grades[student] >= 80) && (grades[student] <= 89)) {
            window.console.log(student + "'s grade is: B");
        };
        if ((grades[student] >= 90) && (grades[student] <= 100)) {
            window.console.log(student + "'s grade is: A");
        };
    };*/

    /* ======= COMMENTS ======== window.console.log(student + "'s grade is: " + grades[student]);
        };          //returns result but not letter grade 

    for(student in grades){
        if grades < 100 AND grades > 90 { 
            window.console.log(student got an A); 
        } else if grades < 90 AND grades > 80 { 
            window.console.log(student got an B);
        } else if grades < 80 AND grades > 70 { 
            window.console.log(student got an C);
        } else if grades < 70 AND grades > 60 { 
            window.console.log(student got an D);
        } else { 
            window.console.log(student got an F);
        };
    };              //not really working */
    
/*STEP 14: Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.*/

    /*var nums = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
    var evens = [];
    var odds = [];
    var iterations = function(nums) {
        for (var i = 0; i < nums.length; i++) {
            if ((nums[i] % 2) != 1) {
                evens.push(nums[i]);
                window.console.log("The following numbers are even: " + evens);
            }
            else {
                odds.push(nums[i]);
                window.console.log("The following numbers are even: " + odds);
            }
        }
    };
    iterations(nums); //see Part 8, 9*/

/*STEP 15: Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.*/

    /*for (var i = 0; i < 100; i++) {
        var number = i + 1;
        var result = "";
        if (number % 3 == 0) {
            result = "Fizz";
        }
        if (number % 5 == 0) {
            result += "Buzz";
        }
        if (!result) {
            result = i + 1;
      }
        window.console.log(result);
    };*/

/*Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game
        1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
        2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
        3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
        4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
        5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
        6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.*/

    /*var response = window.confirm("Are you ready to play the \"Hitchhiker’s Guide to the Galaxy?\" game");
    if (response == true ) {
        window.alert("Awesome, our hero is waiting!")
    } else {
        window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!")
    };
    window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
    var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right");
    switch (direction) {
        case "forward":
            window.alert("You walk about 100 yards and safely make your way out of the cave.");
            break;
        case "left":
            window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
		break;
        case "right":
            window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
		break;
        default:
            window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
    };
    var feedback = Number(window.prompt("Please rate this game from 1 - 10."));
    while (feedback < 1 || feedback > 10) {
        feedback = Number(window.prompt("Please enter a number from 1 - 10."));
    } if (feedback >= 6) {
        window.alert("Thank you, we will continue to make improvements to the game!");
    } else if (isNaN(feedback === 10)) {
        window.alert("Thank you, we will continue to make improvements to the game!");
    } else {
        window.alert("Whatever, you weren’t very good at this game anyway!");
    } */

/*Part 5 - The “Coin Flip” Game
        In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
        1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
        2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
        3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
        4.	If the result is heads and the user selects heads, display the following message within an alert: The flip was heads and you chose heads...you win!
        5.	If the result is heads and the user selects tails, display the following message within an alert: The flip was heads but you chose tails...you lose!
        6.	If the result is tails and the user selects heads, display the following message within an alert: The flip was tails but you chose heads...you lose!
        7.	If the result is tails and the user selects tails, display the following message within an alert: The flip was tails and you chose tails...you win!
        8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.*/

     /*var gameWelcome = alert("Welcome to the coin toss game!");
    var userChoice = prompt("Do you choose HEADS or TAILS?").toUpperCase();
    var coinToss = Math.random();
    if (userChoice === "HEADS") {
        if (coinToss < 0.5) {
            var result = alert("The coin landed on heads. You Win!");
        }
        else {
            var result = alert("The coin landed on tails. You Lose!");
        }
    }
    else {
        if (coinToss < 0.5) {
            var result = alert("The coin landed on heads. You Lose!");
        }
        else {
            var result = alert("The coin landed on tails. You Win!");
        }
    }*/

/*Part 6 - The “Coin Flip” Game Redux (5 points)
        In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
        1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
        2.	Create a for loop that loops 10 times.
        3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
        4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.*/


/*Part 7 - The “Coin Flip Streak” Game (5 points)
        In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
        1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
        2.	Create a do while loop.
        3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
        4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
        5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.*/


//Part 8 – Looping a Triangle (5 points): Write a loop that displays the following triangle within a console window:
    /*var note = '';
    for (var i = 0; i < 7; i++) {
        window.console.log(note += '#');
    };*/

//Part 9 – Odd or Even? (5 points): Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.
    /*for (var i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            window.console.log(i + ' is even');
        } else {
            window.console.log(i + ' is odd');
        }
    };*/
 