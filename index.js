const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Lib/shapes');

function promptUser() {
    inquirer
        .promt([
            //Text display
            {
                type: 'input',
                message: 'Add text to your logo. (Up to 3 characters)',
                name: 'text',
            },
            //Text color
            {
                type: 'input',
                message: 'Choose a color for your text: (Color name or hexadecimal numbers)',
                name: 'textColor',
            },
            //Logo shape
            {
                type: 'list',
                message: 'Choose your logos shape',
                name: 'shape',
                choices: ['Circle', 'Triangle', 'Square'],
            },
            //Shape color
            {
                type: 'input',
                message: 'Choose a color for your shape (Color name or hexadecimal numbers)',
                name: 'shapeColor',
            },
        ])
        .then((responses) => {
            if (responses.text.length > 3) {
                console.log('Text must be no more than 3 characters');
                promptUser();
            } else {
                writeToFile('logo.svg', responses);
            }
        });
}