require('colors')


const showMenu = () => {

    return new Promise( resolve => {
        console.clear();
        console.log('========================'.green);
        console.log(' Seleccione una opcion  '.green);
        console.log('========================\n'.green);
        console.log('1. Crear Tarea'.yellow);
        console.log('2. Listar tareas'.yellow);
        console.log('3. Listar tareas completadas'.yellow);
        console.log('4. Listar tareas pendientes'.yellow);
        console.log('5. Completar tarea(s)'.yellow);
        console.log('6. Borrar tarea'.yellow);
        console.log('7. Salir'.yellow);


        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opcion: ', (opt) =>{
            readLine.close();
        });
    })
}

const pause = () => {
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readLine.question(`\nPresione ${'Enter'.green} para continuar\n`, (opt) =>{
        readLine.close();
    });
}

module.exports = {
    showMenu,
    pause
}
