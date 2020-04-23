export class Post {
    imagen: string;
    titulo: string;
    texto: string;
    autor: string;
    fecha: string;
    categoria: string;
    id: number;

    constructor(pImagen: string, pTitulo: string, pTexto: string, pAutor: string, pCategoria: string, pId: number) {
        this.imagen = pImagen;
        this.titulo = pTitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.fecha = new Date().toLocaleString();
        this.categoria = pCategoria;
        this.id = pId;

    }
}

