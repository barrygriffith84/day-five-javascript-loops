// for(i=0; i < .length; i++){

// }
// 1. Student Names
// In your JavaScript file, copy and paste the following array:
// var cohortOneStudents = [Sable, David, Joey, Nick, Tommy, Connor, Charles, Russ, Bobby, Josh, Nikki, Matt, Dale, Sydney]
// Use a for loop to print each student's name to the console.

var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for(i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i])
}

// 2. Interests
// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
// Output:
// One of my interests is: hiking.
// One of my interests is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.

var interests = ["Hiking", "Coding", "Reading", "Cooking", "Investing"];

for(i=0; i < interests.length; i++){
    console.log(`One of my interests is: ${interests[i]}`)
}



// 3. Favorite Interest
// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.
// Output:
// One of my interests is: hiking.
// My absolute favorite interest is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.

for(i=0; i < interests.length; i++){
    if (interests[i] === "Investing") {
        console.log(`${interests[i]} isn't an interest, it's a way of life!`)
    }
else{
    console.log(`One of my interests is: ${interests[i]}`)
    }
}

// 5. Harry Potter Titles
// Copy and paste the following array into your JavaScript file:
// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
// Use a for loop to output the complete titles to the console.
// Output:
// "Harry Potter and the Sorcerer's Stone"
// "Harry Potter and the Chamber of Secrets"
// .
// .
// .
// "Harry Potter and the Deathly Hallows"

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(i=0; i < harryPotterTitles.length; i++){
        console.log(harryPotterTitles[i])
    }


// 6. Student Grades
// Copy and paste the folowing array of grades into your JavaScript file:
// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Loop through the grades with a for loop
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.
// 7. Two, Four, Six, Eight - Who do we appreciate?! CHEER
// Write a loop that counts by 2's and creates the following output.
// Output
// 2 4 6 8 Who do we appreciate?!

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for(i=0; i < grades.length; i++){
    if (grades[i] >= 0 && grades[i] <= 69) {
        console.log("You got an F")
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        console.log("You got a D")
    } else if (grades[i] >= 77 && grades[i] <= 84) {
        console.log("You got a C")
    } else if (grades[i] >= 85 && grades[i] <= 92) {
        console.log("You got a B")
    } else if (grades[i] >= 93 && grades[i] <= 100) {
        console.log("You got a")
    }
}

// 8. Student Grades Take Two
// Copy and paste the folowing array of grades into your JavaScript file:
// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Loop through the grades with a for loop. Use an if statement to find the highest and lowest grades and then write them to the console.

var highestGrade = 0;
var lowestGrade = 100;

for(i=0; i < grades.length; i++){
    if (grades[i] > highestGrade) {
        highestGrade = grades[i]
    }
    if (grades[i] < lowestGrade) {
        lowestGrade = grades[i]
    }
}    

console.log(`The highest grade is ${highestGrade} and the lowest grade is ${lowestGrade}`)

// 9. Interrupting Cow
// Copy and paste the following array into your JavaScript file:
// var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.
// Print your sentence ot the console.
// Output:
// the cow danced MOOOOOOOO through the trees MOOOOOOOO in the light MOOOOOOOO of the moon

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

for(i = 0; i < sentenceArray.length; i++){
    if ((i + 1) % 4 === 0 && i !== 0) {
        console.log("MOOOOOOO")
    }else {
        console.log(sentenceArray[i])
    }
}

// 10. Student Grades
// Take the following array from the student grades exercise above. Each entry in the array represents a different student's percentage grade for the entire course:

// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Use JavaScript to answer the following questions:

// How many students got A's?
// How many students got B's?
// Which was the most common letter grade?
// What was the average percentage grade in the class?

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];
var fCount = 0;
var dCount = 0;
var cCount = 0;
var bCount = 0;
var aCount = 0;
var mostCommonCount = 0;
var mostCommonGrade = "";
var gradeSum = 0;
var gradeAverage = 0;

for(i = 0; i < grades.length; i++){
    if (grades[i] >= 0 && grades[i] <= 69) {
        fCount++
    } else if (grades[i] >= 70 && grades[i] <= 76) {
        dCount++
    } else if (grades[i] >= 77 && grades[i] <= 84) {
        cCount++
    } else if (grades[i] >= 85 && grades[i] <= 92) {
        bCount++
    } else if (grades[i] >= 93 && grades[i] <= 100) {
        aCount++
    }
}

for(i = 0; i < grades.length; i++){
    if(mostCommonCount < fCount){
        mostCommonCount = fCount
        mostCommonGrade = "F"
    } if(mostCommonCount < dCount){
        mostCommonCount = dCount
        mostCommonGrade = "D"
    } if(mostCommonCount < cCount){
        mostCommonCount = cCount
        mostCommonGrade = "C"
    } if(mostCommonCount < bCount){
        mostCommonCount = bCount
        mostCommonGrade = "B"
    } if(mostCommonCount < aCount){
        mostCommonCount = aCount
        mostCommonGrade = "A"
    }
}

for(i = 0; i < grades.length; i++){
    gradeSum += grades[i]
}

gradeAverage = gradeSum / grades.length;

console.log(`There were ${aCount} A's in the class`)
console.log(`There were ${bCount} B's in the class`)
console.log(`The most common letter grade is ${mostCommonGrade}`)
console.log(`The average percentage grade is ${gradeAverage}`)





// Challenges
// Challenge #1
// Use the data from the Yahoo weather API to print a ten day forecast.
// In your JavaScript file, copy and paste the weather data.
// Use a for loop to loop through the forecast data.
// Inside the for loop, create a string for each day in the forecast. The string should say something like: "On Thursday, 06 Dec 2018, the low will be 25 and the high will be 29. The forecast calls for snow." Print the string to the console,.
// If the high is above 85, add the phrase: "Stay cool out there, folks!"
// If the high is below 40, add the phrase: "Don't forget to bundle up!"
// If the low is below 20, add the phrase: "Temperatures will be dangerously low!"
// Challenge #2
// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder? (Hint: you might need the modulus operator.)

// Challenge #3
// Write a Fibonacci number generator that outputs the numbers in the series that are less than 500.