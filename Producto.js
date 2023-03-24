export class Producto{
  nombre
  precio
  tipo
  dias

  constructor(nombre, precio, tipo, dias=0){
    this.nombre=nombre
    this.precio=precio
    this.tipo=tipo
    this.dias=dias
  }

  get getFinalPrice(){
    switch(this.dias){
      case 1:
        return (this.precio/4).toFixed(2)
      case 2:
        return (this.precio/3).toFixed(2)
      case 3:
        return (this.precio/2).toFixed(2)
      default:
        return this.precio
    }
  }

  get getTotalPrice(){
    return (this.getFinalPrice*5).toFixed(2)
  }

  get getData(){
    if(this.dias===0)
      return "Producto: "+this.nombre+"<br>Precio: "+this.precio+"€<br>Tipo: "+this.tipo+"<br>Precio Total: "+this.getTotalPrice+"€"
    else
      return "Producto: "+this.nombre+"<br>Precio: "+this.precio+"€<br>Tipo: "+this.tipo+"<br>Dias para caducar: "+this.dias+"<br>Precio Final: "+this.getFinalPrice+"€"+"<br>Precio Total: "+this.getTotalPrice+"€"
  }
}