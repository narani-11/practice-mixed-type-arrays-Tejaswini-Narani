// Task 1: Create the profile array
let userProfile = [
  "Sam",               
  28,                  
  true,                
  "New York",          
  ["reading", "cycling"] 
];

// Task 2: Access and log details
console.log("User's name:", userProfile[0]);
console.log("Second hobby:", userProfile[4][1]);

// Task 3: Modify the profile
userProfile[1] = 29; 
userProfile[4].push("gaming"); 

// Task 4: Display the updated profile
console.log("Updated profile:", userProfile);
Updated profile:
Name: Sam
Age: 29
Active: true
City: New York
Hobbies: [ 'reading', 'cycling', 'gaming' ]
