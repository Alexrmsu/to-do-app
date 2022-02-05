require('colors');
console.clear();

const { showMenu, pause } = require('./helpers/msg')


const main = async() => {

    do {
        opt= await showMenu();

        await pause();

    } while ( opt !== '0')

}

main();
