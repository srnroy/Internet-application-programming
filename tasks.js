// query for the submit button and input task field once in the beginning and store those
// two values in the variables submit and newTask.
const newtask = document.getElementById('task');
const submit = document.getElementById('submit');


// disable the submit button by default. Enable/disable by setting its disabled attribute to
// false/true.
// submit.disabled = true;


// Listen for input to be typed into the input field
newtask.addEventListener('input', function(){
    input_value = newtask.value;
    console.log(input_value)
});


// Listen for submission of form
const form = document.getElementById('taskform');

form.addEventListener('submit', function(event){ 
    event.preventDefault();
    
    // Find the task the user just submitted
    const inputValue = document.getElementById('task').value;
    console.log(inputValue)

    // Create a list item for the new task
    const new_task_item = document.createElement('li');
    new_task_item.textContent = inputValue;
    // add the task to the task list
    document.getElementById('tasks').appendChild(new_task_item);

    // At the end of the script, add the line return false. This prevents the default submission of
    // the form which involves either reloading the current page or redirecting to a new one.
    return false;

});
           