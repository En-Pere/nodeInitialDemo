const create = [
  {
    type: "input",
    name: "name",
    message: "Ingresa el nombre de la tarea:",
  },
  {
    type: "input",
    name: "startDate",
    message: "Fecha de Inicio:",
  },
  {
    type: "input",
    name: "endDate",
    message: "Fecha de Fin:",
  },
  {
    type: "input",
    name: "description",
    message: "Descripción de la tarea:",
  },
  {
    type: "input",
    name: "user",
    message: "Usuario Asignado:",
  },
];

const remove = [
  {
    type: 'input',
    name: 'taskIndex',
    message: 'Ingresa el indice de la que tarea vas a eliminar?:' //Decidir como identificar la tarea a eliminar 
  },
  {
    type: "list",
    name: "confirmation",
    message: "Deseas borrar?",
    choices: ["Yes", "No"],
  },
];

const findOne = [// Pendiente de definir
  {
    type: "input",
    name: "taskIndex",
    message: "Ingresa el indice de la tarea que quieres ver:",
  },
];

const update = [ // Revisado Pere OK.
    {
      type: 'input',
      name: 'taskindex',
      message: 'Ingresa el indice de la tarea que quieres modificar?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'Ingresa el NUEVO nombre de la tarea:'
    },
    {
      type: 'input',
      name: 'startDate',
      message: 'NUEVA Fecha de Inicio:'
    },
    {
      type: 'input',
      name: 'endDate',
      message: 'NUEVA Fecha de Fin:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'NUEVA Descripción de la tarea:'
    },
    {
      type: 'input',
      name: 'user',
      message: 'NUEVO Usuario Asignado:'
    },
    {
      type: 'list',
      name: 'state',
      message: 'introduce el NUEVO estado',
      choices: ['pendiente', 'finalizada', 'en proceso'],
    }
]
const state = [ // Revisado Pere OK.
  {
    type: 'input',
    name: 'taskindex',
    message: 'Ingresa el indice de la tarea que quieres modificar?'
  },
  {
    type: 'list',
    name: 'state',
    message: 'introduce el NUEVO estado',
    choices: ['Pendiente', 'Finalizada', 'En Proceso'],
  }
];

module.exports = {create, remove, findOne, update, state}  
