

export interface Producto {
    id: string;
    Producto: string;
    Descripcion: string;
    Precio: number;
    Foto: string;
    Disponible: boolean;
    Categoria: string;
}

export interface Carrito {
    Producto: string;
    Precio: number;
    Cantidad: number;
}