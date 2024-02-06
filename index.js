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

function writeToFile(fileName, responses) {
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';

    let shapeChoice;
    switch (responses.shape) {
        case 'Circle':
            shapeChoice = new Circle();
            break;
        case 'Triangle':
            shapeChoice = new Triangle();
            break;
        case 'Square':
            shapeChoice = new Square();
            break;
        default:
            throw new Error('Invalid shape');
    }

    shapeChoice.setColor(responses.shapeColor);

    svgString += shapeChoice.render();

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="45" fill="${responses.textColor}">${responses.text}</text>`;

    svgString +="</g>";
    svgString +="</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

promptUser();