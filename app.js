require('colors');
const { inquirerMenu } = require('./helpers/inquirer');
const {pause} = require("./helpers/msg");

console.clear();





const main = async() => {

    let opt = '';

    do {
        opt = await inquirerMenu();


        if ( opt !== '0') await pause();


    } while (opt !== '0');

}

main();
