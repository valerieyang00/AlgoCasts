// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency
//  of at least one of the chosen numbers is different.

// constraints
// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

//test
const candidates = [2,3,5]
const target = 8

//using backtracking algo
const comboSum = (candidates, target) => {
    const result = []
    // Sort the candidates array in ascending order
     candidates.sort((a, b) => a - b);

    // Helper function to backtrack and find combinations
    function backtrack(currList, currSum, start) {
        if (currSum === target) {
          result.push([...currList]);
          return;
        }
        
        for (let i = start; i < candidates.length; i++) {
          const num = candidates[i];
          
          if (currSum + num > target) {
            break; // Stop exploring this path if the sum exceeds the target
          }
          
          currList.push(num); // Choose the current number
          backtrack(currList, currSum + num, i); // Continue exploring with the current number
          currList.pop(); // Backtrack and remove the current number
        }
    }

    backtrack([], 0, 0); // Start the backtracking process
  
  return console.log(result)

}

comboSum(candidates, target);
