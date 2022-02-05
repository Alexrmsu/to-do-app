const inquirer = require('inquirer');
require('colors');



const questions = [
    {
        type: 'list',
        name: 'Numero: ',
        message: '¿Que deseas hacer?'.blue,
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


const inquirerMenu = async () => {


    console.clear();
    console.log('--------------------------'.blue)
    console.log('|  Seleccione una opcion |'.blue)
    console.log('--------------------------'.blue)

    const Options = await inquirer.prompt(questions);

    return Options;

}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.red} para continuar`
        }
    ];
    await inquirer.prompt(question);
};


module.exports = {
    inquirerMenu,
    pause
}
