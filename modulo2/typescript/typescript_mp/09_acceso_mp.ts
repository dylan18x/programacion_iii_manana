export class ProductoMascota {
    public nombreProducto: string;
    private registro: any;
    protected idGeneric: string = 'PET-000-XYZ';
    constructor(nombreProducto: string){
        this.nombreProducto = nombreProducto;
        this.generarRegistro();
    }
    generarRegistro(): void{
        this.registro = (new Date()).toDateString();
    }
    getRegistro(): any {
        return this.registro;
    }
    getAtributos(): any {
        return {
            nombreProducto: this.nombreProducto,
            registro: this.registro,
            id: this.idGeneric
        };
    }
}
