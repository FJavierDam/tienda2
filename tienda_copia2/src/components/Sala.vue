<template>
<body>
        <div class="cabeza">
            <h2>Futbol sala</h2>
        </div>
    
    <section>
        <div class="cardList" v-if="mostrar">
            <div class="card" style="width: 12rem;" v-for="(sala, index) in lista" :key="index">
                <div class="card-body">
                    <img src="@/assets/zapatilla-munich-g3-profit-coral-0.jpg" width="160px" height="180px">
                    <h5 class="card-title" style="color:black">{{sala.name}}</h5>
                    <p class="card-text" style="color:black">{{sala.precio}}$</p>
                    <router-link :to="{ name: 'producto', params: {name: sala.name, precio: sala.precio,
                     material: sala.material, imagen: require('@/assets/zapatilla-munich-g3-profit-coral-0.jpg')}}"><button class="btn btn-primary">mostrar</button></router-link>
                </div>
            </div>
        </div>
        <!--<div class="main1">
           <div class="inRow1">
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Zapatilla G3 Profit', precio: 61.95, material: 'cuero', stock: 20, imagen: require('@/assets/zapatilla-munich-g3-profit-coral-0.jpg')} }"><img class="imagen" src="@/assets/zapatilla-munich-g3-profit-coral-0.jpg" width="215px" height="230px"></router-link>
                <p>Zapatilla G3 Profit</p>
                <p>61'95€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Zapatilla Prisma', precio: 79.95, material: 'cuero', stock: 20, imagen: require('@/assets/zapatilla-munich-prisma-red-0.jpg')}}"><img class="imagen" src="@/assets/zapatilla-munich-prisma-red-0.jpg" width="215px" height="230px"></router-link>
                <p>Zapatilla Prisma</p>
                <p>79'95€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Zapatilla continental Exclusiva Sergio Lozano', precio: 114.95, material: 'cuero', stock: 20, imagen: require('@/assets/zapatilla-munich-continental-exclusiva-sergio-lozano-white-gold-0.jpg')}}"><img class="imagen" src="@/assets/zapatilla-munich-continental-exclusiva-sergio-lozano-white-gold-0.jpg" width="215px" height="230px"></router-link>
                <p>Zapatilla continental Exclusiva Sergio Lozano</p>
                <p>114'95€</p></div>
            </div>
        </div>-->
    </section>
    
</body>
</template>

<script>
import {db} from '../config'

export default {
    name: 'sala',
    data(){
        return{
        imagen : '@/assets/zapatilla-munich-g3-profit-coral-0.jpg',
        mostrar : false,
        salas : {name:'',precio:'',material:''},
        lista : []
        }
        
    },
    mounted(){
        this.mostrar = true;
         db.collection("futbolsalaList").get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {this.salas = []
                 this.salas.material = doc.data().material,
                 this.salas.name = doc.data().name,
                 this.salas.precio = doc.data().precio,
                 
                 this.lista.push(this.salas);
                 
                 console.table(this.lista);
             });
             
             });
    }
}
</script>

<style>
p{
    margin-bottom: 20px;
    
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: black;
    font-size: 90%;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: black;
}

.cabeza{
    text-align: center;
    margin-top: 1em;
}

body{
    
    font-size: 16px;
}

.inRowOpciones{
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    padding-top: 3em;
    margin-left: 12em;
    margin-right: 12em;
    font-size: 90%;
}

.bota:hover .imagen {-webkit-transform:scale(1.1);transform:scale(1.1);}
.main1 {overflow:hidden;}

.main1{
    text-align: center;
}


.inRow1{
    display: flex;
    text-align: left;
    justify-content: space-around;
    margin-left: 8em;
    margin-right: 8em;
    font-size: 90%;

}

.inRow2{
    display: flex;
    text-align: left;
    justify-content: space-around;
    margin-left: 8em;
    margin-right: 8em;
    font-size: 90%;

}

.cardList{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}
.cardList2{
    display: flex;
    flex-direction: row;
}
.card{
    margin: 20px;
}
</style>