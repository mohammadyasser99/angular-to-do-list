export interface Task{
    id? : number;
    title: string;
    description: string;
    done: boolean;
    created_at?: Date;
    updated_at?: Date;

}