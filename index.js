
  // Step 1: Collect user input
  let name = prompt("Enter your name:");
  let score1 = parseFloat(prompt("Enter your score for Subject 1:"));
  let score2 = parseFloat(prompt("Enter your score for Subject 2:"));
  let score3 = parseFloat(prompt("Enter your score for Subject 3:"));

  // Step 2: Calculate the average score
  let average = (score1 + score2 + score3) / 3;

  // Step 3: Determine the grade
  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  //check if score1, score2 and score3 are numbers
  if (isNaN(score1) || isNaN(score2) || isNaN(score3)) {
    console.log("Please enter valid numbers for the scores.");
  } else {
    
    // Step 4: Output the results
    console.log(`Hi ${name}! Your average score is ${average.toFixed(2)}.`);
    console.log(`Your grade is ${grade}.`);

    // Bonus: Add motivational messages
    if (grade === "A" || grade === "B") {
      console.log("Excellent work, keep it up!");
    } else if (grade === "C") {
      console.log("Good job, but there’s room for improvement.");
    } else {
      console.log("You need to work harder. Don’t give up!");
    }
  }
  
/*
assignment
write about your self on the about page, your contact on the contact page and leave the index page as it is
*/
