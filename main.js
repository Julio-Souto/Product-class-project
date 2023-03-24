import { Producto } from "./Producto.js"

let tipo = document.getElementById("tipo")
let form = document.getElementById("main-form")
let products = []
let totalPrice = 0

tipo.value="perecedero"

tipo.addEventListener("change",() => {
  if(tipo.value==="perecedero")
    document.getElementById("dias-container").classList.remove("oculto")
  else
    document.getElementById("dias-container").classList.add("oculto")
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  validateForm()
})

function validateForm(){
  let nombre = document.getElementById("nombre")
  let precio = document.getElementById("precio")
  let tipo = document.getElementById("tipo")
  let dias = document.getElementById("dias")
  if(tipo.value==="perecedero"){
    if(/^\w+$/.test(nombre.value)&&/^[0-9]+(\.[0-9]{1,2})?$/.test(precio.value)&&/^[0-9]+$/.test(dias.value)){
      let product = new Producto(nombre.value,Number(precio.value),tipo.value,Number(dias.value))
      console.log(product)
      products.push(product)
      showProducts()
    }
    else{
      document.getElementById("error").innerHTML = "Datos no válidos: \n"+"Producto: "+nombre.value+"\nPrecio: "+precio.value+"\nTipo: "+tipo.value+"\nDias para caducar: "+dias.value
    }
  }
  else{
    if(/^\w+$/.test(nombre.value)&&/^[0-9]+(\.[0-9]{1,2})?$/.test(precio.value)){
      let product = new Producto(nombre.value,precio.value,tipo.value)
      products.push(product)
      showProducts()
    }
    else{
      document.getElementById("error").innerHTML = "Datos no válidos: \n"+"Producto: "+nombre.value+"\nPrecio: "+precio.value+"\nTipo: "+tipo.value
    }
  }
}

function showProducts(){
  let resultado = document.getElementById("resultado")
  totalPrice = 0
  let i = 1
  resultado.innerHTML = products.map((product) => {
    totalPrice += Number(product.getTotalPrice)
    return "Producto "+i+++"<br>"+ product.getData
  }).join("<br><br>")

  resultado.innerHTML += "<br><br>Precio Total de los Productos: "+totalPrice.toFixed(2)+"€"
  
}