/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */

function dayWorth(tasks, hourlyRate) {
  // put your code in here, the function does returns a euro formatted string
  // using every method to make the condition to make sure that the objects in the array have property : duration && this property value's is a number !!
  const isDuration = tasks.every(
    task => task.hasOwnProperty('duration') === true && typeof task.duration === 'number',
  );
  // usuing the result of the every method
  // if the objects in the arrays doesn't have property : duration  or the value of this property is not a nubmer === >log this in a message
  if (!isDuration) {
    return console.log(
      'Objects in the array should have property : duration!!!    && the value of this property must be number!!!!  ',
    );
    // else if all the objects in the array have property : duration && the value of this property is a nubmer =====> do this :
  } else {
    // usuing map method to create an array includes all the duration of all tasks in one array;
    const durationInMinutes = tasks.map(task => task.duration);
    // using reduce method to get the total of all durations in the new array
    const totalMinutesWorked = durationInMinutes.reduce((x, y) => x + y);
    // to get the total hours, we divide the total minutes by 60 so we get how many worked  hours on monday then we multiply it by the hours rate !

    const totalHours = totalMinutesWorked / 60;

    let result = totalHours * hourlyRate;

    return ` € ${result.toFixed(2)} `;
  }
}

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25));
console.log(dayWorth(mondayTasks, 13.37));
