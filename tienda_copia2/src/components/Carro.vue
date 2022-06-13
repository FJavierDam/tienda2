<template>
    <div>
            <div class="card" v-for="(item, index) in items" :key="index">
                <div class="card-body">
                    <h5 style="color:black">{{item[0]}}</h5>
                    <h5 style="color:black">{{item[1]}}€</h5>
                    <h5 style="color:black">Material: {{item[2]}}</h5>
                    <button v-on:click="deleteItem">Borrar</button>
                </div>  
            </div>
            <div>
                <h4>Total: {{calcPrice(1)}} </h4>
            </div>   
    </div>
</template>

<script>

export default {
    name: "carro",
    data(){
        return{
            items:[]
        }
    },
    mounted(){
        this.items = JSON.parse(localStorage.getItem('miCarrito'));
        console.table(this.items);
    },
    methods:{
        deleteItem(item, index) {
      this.items.splice(index, 1);
      localStorage.setItem('miCarrito', JSON.stringify(this.items));
        },
        calcPrice(item) {
      return parseFloat(item[1]);
    },
    }
    
}
</script>

<style>
.card{
    margin: 20px;
}
</style>