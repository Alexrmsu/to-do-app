require('colors');
const { inquirerMenu } = require('./helpers/inquirer');
const { pause } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');


console.clear();





const main = async() => {

    let opt = '';

    do {
        // opt = await inquirerMenu();
        // console.log({opt});
        const tasks = new Tasks();
        const task = new Task('Comprar comida');
        console.log(tasks);
        await pause();




    } while (opt !== '0');

}

main();
