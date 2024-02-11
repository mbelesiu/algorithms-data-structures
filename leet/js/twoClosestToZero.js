// This is not a leetcode questionm (at least I couldnt find its coresponding problem)

// Question: An Array of integers is given, both +ve and -ve. You need to find the two elements such that their sum is closest to zero.
// For the below array, program should print -80 and 85.


const minAbsSumPair = (arr) =>{

  // have an anchor at each point
  // run through the array, sum the two togther.
  // if the current sum is closer to Zero, replace
  // keep going until done

  if(arr.length < 2){
    console.log('Array not long enough')
    return null
  }

  const answer = []
  let deltaToZero = Infinity

  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      let currentDelta = Math.abs(arr[i] + arr[j])
      if ( currentDelta < deltaToZero){
        deltaToZero = currentDelta
        answer[0] = arr[i];
        answer[1] = arr[j];
      }
    }
  }

  console.log(`The two elements whose sum is minimum are ${answer[0]} and ${answer[1]}`)
}






minAbsSumPair([1, 60, -10, 70, -80, 85]);
minAbsSumPair([1, 60, 85]);
minAbsSumPair([-58, 60, -10, 70, -80, 85]);
minAbsSumPair([-3]);
