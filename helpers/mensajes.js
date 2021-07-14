require('colors');

const mostrarMenu= ()=>{

    return new Promise(resolve=>{
        console.clear();
        console.log('========================='.green);
        console.log(' Seleccione una opcion'.green);
        console.log('=========================\n'.green);
        console.log(`${'1.'.green} Crear una tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);
        const readline= require('readline').createInterface({
            input: process.stdin,//pausa la ejecucion espera el ingreso..
            output: process.stdout // mostrar algo cuando le estamos pidiendo algo
        });
        readline.question('Seleccione una opcion: ',(opt)=>{ // para limpiar la consola?
            readline.close();
            resolve(opt);

        });
    });
}
const pause=()=>{
    return new Promise(resolve=>{
        const readline= require('readline').createInterface({
            input: process.stdin,//pausa la ejecucion espera el ingreso..
            output: process.stdout // mostrar algo cuando le estamos pidiendo algo
        });
        readline.question(`\nPresione ${'ENTER'.green } para continuar\n`,(opt)=>{
            readline.close();
            resolve();
        });
    });
   
}
module.exports={
    mostrarMenu,
    pause
}