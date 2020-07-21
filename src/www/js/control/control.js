/****************************************************************************/
// EXERCISE 1:
//
// In the function below, return true if the input variable is equal
// to the number 42.  Otherwise return false.  Use an `if' statement
// to achieve this.
function exercise1(input) {

  if (input === 42) {
      return true;
  } else {
      return false;
  }

}

/****************************************************************************/
// EXERCISE 2:
//
// In the function below, return true if the input variable is equal
// to the number 42.  If the input is the number 43 then return null.
// In all other cases return false.
//
// Use an `if' statement to achieve this.
function exercise2(input) {

    if (input === 42) {
        return true;
    } else if (input === 43) {
        return null;
    } else {
        return false;
    }

}

/****************************************************************************/
// EXERCISE 3:
//
// Repeat exercise 2, this time using a `switch' statement.
function exercise3(input) {
    let result = false;
    switch (input) {
        case 42: result = true;
                    break;
        case 43: result = null;
                    break;
        default: result =  false;
    }
    return result;

}

/****************************************************************************/
// EXERCISE 4:
//
// In the function below, write a loop that calls the `counter'
// function exactly 3 times.
//
// Example of calling the counter function:
//
//     counter();
//
function exercise4(counter) {

    for (let i=0; i < 3; i++) {
        counter();
    }
}

/****************************************************************************/
// (BONUS) EXERCISE 5:
//
// The function below will be called with an array of numbers.  Return
// the sum of those numbers.
function exercise5(numbers) {


    // of will return 0 .. index elements
    // in will return all elements in array, even weirdly indexed ones...
  let sum = 0;
  for (val of numbers) {
      sum += val;
  }
  return sum;

}
