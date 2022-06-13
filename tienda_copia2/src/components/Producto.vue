<template>
    <body>
        <aside>
            <div class="imagenProducto"><img v-bind:src="imagen" width="310px" height="310px"></div>
        <div class="contenedor">
            <div class="resto">
                <h1 id="name">{{name}}</h1>
                <h2 id="precio">{{precio}}€</h2>
                <h3 id="material">Material: {{material}}</h3>
                <button class="button" v-on:click="mandarCarro">Comprar</button>
            </div>
        </div>
        </aside>
        <aside>
            
        </aside>
        
    </body>
</template>

<script>
import carro from './Carro.vue'

export default {
    name: 'producto',
    data(){
        return{
            prod:{name:'',precio:'',material:''},
            carrito: []
        }
    },
    methods:{
        mandarCarro(){
            var carroItems = JSON.parse(localStorage.getItem('miCarrito'));

            if(carroItems == null) carroItems = [];

            this.prod = [this.prod.name = this.name,
                this.prod.precio = this.precio,
                this.prod.material = this.material];
            
            localStorage.setItem("lastItem", JSON.stringify(this.prod));
            console.log(this.prod);

            carroItems.push(this.prod);
            localStorage.setItem("miCarrito", JSON.stringify(carroItems));

            console.log('miCarrito', JSON.parse(localStorage.getItem('miCarrito')));

            this.carrito = JSON.parse(localStorage.getItem('miCarrito'));
            console.log(this.carrito);

            /*console.log(this.prod); 
            this.carrito.push(this.prod);
            console.table(this.carrito)

            if(localStorage.getItem('miCarrito').length > 1){
                var carro = localStorage.getItem('miCarrito');
                carro = JSON.parse(carro);
                console.table(carro);
                this.carrito.push(carro);
                localStorage.setItem('miCarrito', JSON.stringify(this.carrito));
            }else{
                localStorage.setItem('miCarrito', JSON.stringify(this.carrito));
            }
            console.table(this.carrito);*/

            

            
            
        }
    
    },
    components:{
        carro
    },
        props: {
        imagen: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        material: {
            type: String,
            required: true
        }
    },
}
</script>

<style>

body{
    font-size: 16px;
}

aside{
    width: 50%;
    display: flex;
    align-items: center;
}

.imagenProducto{
    display: flex;
    margin-top: 5em;
    margin-left: 17em;
}

.resto{
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: right;
    margin-left: 20em;
}

.button {
  background-color: black;
  color: white;
  border: 2px solid white; /* Green */
}

</style>