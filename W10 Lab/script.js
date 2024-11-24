// Create an application that asks a user to enter how many subjects they have. 
// The application should then ask the user to enter the results for each subject. 
// Store these results in an array and print them back to the user along with their overall average and grade for each module.
// @author Hung Nguyen

function subjects(){
    let numSubjects;
    let results = [];
    let averageScore;
    let totalResult = 0;

    numSubjects = parseInt(prompt("Enter the number of subjects"));

    for(i=0;i<numSubjects;i++){
        results[i] = parseFloat(prompt("Enter the subject "+(i+1)+" result"));
        totalResult += results[i];
    }
    averageScore = totalResult/numSubjects;
    
    alert("The results are "+results+". The average score is "+averageScore);
}