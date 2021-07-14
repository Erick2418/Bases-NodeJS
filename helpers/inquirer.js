const inquirer = require('inquirer');
require('colors');

const preguntas=[
    {
        type:'list',
        name: 'option',
        message:'¿Que desea hacer?',
        choices: [
            {
                value:'1',
                name:`${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.green} Listar tareas`
            },
            {
                value:'3',
                name:`${'3.'.green} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4.'.green} Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.green} Completar tareas`
            },
            {
                value:'6',
                name:`${'6.'.green} Borrar tareas`
            },
            {
                value:'0',
                name:`${'0.'.green} Salir`
            },
            
            
        ],
    } 
];
 

const inquirerMenu=async()=>{
    console.clear();
    console.log('========================='.green);
    console.log(' Seleccione una opcion'.white);
    console.log('=========================\n'.green);
    const {option}= await inquirer.prompt(preguntas);
   
    return option;

}

const pause=async()=>{
    const question=[
        {
            type:'input',
            name: 'option',
            message:`Presione ${'ENTER'.green} para continuar`,
        }
    ]
    console.log('\n')
    await inquirer.prompt(question);
}

const leerInput=async(message)=>{
    const question=[
        {   
            type: 'input',
            name: 'desc',
            message,
            validate(value){// esto nos permite validar que este ingresado todo
                if(value.length===0){
                    return 'Porfavor ingrese una tarea'
                }
                return true;
            }
        }
    ];
    const {desc}= await inquirer.prompt(question);
    return desc;
};


module.exports={
    inquirerMenu,
    pause,
    leerInput
}