export class Preguntas{
    id: number
    pregunta: string;
    r1: string;
    r2: string;
    
    constructor(id: number, pregunta: string, r1: string, r2: string){
        this.id = id;
        this.pregunta = pregunta;
        this.r1 = r1;
        this.r2 = r2
    }

}