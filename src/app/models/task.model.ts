export interface Task{
    id: number;
    name: string;
    state: boolean;
}

export class TaskModel implements Task{
    constructor(public id: number, public name: string, public state: boolean){}
}
