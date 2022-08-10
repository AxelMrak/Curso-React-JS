import { LEVELS } from "./level.enum";


export class Task { //Exportamos y le agregamos propiedades a la clase
    name = ``;
    description = ``; //Tipo String aun sin dato
    completed = false; //Tipo boolean
    level = LEVELS.NORMAL; //Cuando ponemos LEVELS en mayusculas se importa automaticamente el objeto creado antes. Por defecto es normal.

    constructor(name, description, completed, level){
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }

}