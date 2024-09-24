//definicion de estrucutra para cada objeto de tipo tarea
export interface Task{
    id: number;
    title: string;
    state: boolean;
}

//Implmenta la interfas Task para que se pueda intanciar tareas
export class TaskClass implements Task{
    constructor(public id: number, public title: string, public state: boolean = false){}
}