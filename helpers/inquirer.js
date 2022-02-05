const inquirer = require('inquirer');
require('colors');


const questions = [
    {
        type: 'list',
        name: 'Options',
        message: '¿Que deseas hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Lista'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. salir'
            },
        ]
    }
]





const inquirerMenu = async() => {



    console.clear();
    console.log('--------------------------'.green)
    console.log('|  Seleccione una opcion |'.green)
    console.log('--------------------------'.green)

    const opt = await inquirer.prompt(questions);

    return opt;

}

module.exports = {
    inquirerMenu
}
