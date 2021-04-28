// select all the buttons
const buttons = document.querySelectorAll('button');

//select the input field
const display = document.querySelector('.display')


// calculate function 
const calculate = event =>{
    // clicked button value
    const clickedButtonValue = event.target.value;
    if(clickedButtonValue === '='){
        //check it is null or not
        if(display.value !== ''){
            //calculate
            display.value = eval(display.value)
        }
    }else if(clickedButtonValue === 'C'){
        //clear everything on display
        display.value = '';
    }else if(clickedButtonValue === 'X'){
    //clear everything on display
      display.value = display.value.slice(0, -1)
    }else {
        //calculate
        display.value +=clickedButtonValue;
    }
} 
buttons.forEach(function(button){
    button.addEventListener('click', calculate);
})


