console.log(
    'This is Calculator App tutorial'
);

let screen = document.getElementById('screen');
let screenValue = '';
let buttons = document.querySelectorAll('button');
// console.log(button)
for (item of buttons) {
    item.addEventListener('click', (e) => {
        //target the inner text of each button for if else conditions
        buttonText = e.target.innerText;

        //logic for basic operations of mathematics
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '/') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '+') {
            buttonText = '+';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '-') {
            buttonText = '-';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        //special case for clear all and equal to
        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }

        // besides operations buttons all the buttonText should be printed same as their value in the input
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}