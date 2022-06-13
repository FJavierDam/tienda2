<template>
<body>
            <div class="cabeza">
               <h2>Ropa de calle</h2>
            </div>
        
        <section>
            <div class="cardList" v-if="mostrar">
                <div class="card" style="width: 12rem;" v-for="(calle, index) in lista" :key="index">
                    <div class="card-body">
                        <img src="@/assets/Camiseta-Nike-FC-1.jpg" width="160px" height="180px">
                        <h5 class="card-title" style="color:black">{{calle.name}}</h5>
                        <p class="card-text" style="color:black">{{calle.precio}}$</p>
                        <router-link :to="{ name: 'producto', params: {name: calle.name, precio: calle.precio,
                         material: calle.material, imagen: require('@/assets/Camiseta-Nike-FC-1.jpg')}}"><button class="btn btn-primary">mostrar</button></router-link>
                    </div>
                </div>
            </div>
            <!--<div class="main1">
                <div class="inRow1">
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Camiseta Nike F.C. Dry Seasonal Graphic', precio: 29.95, material: 'cuero', stock: 20, imagen: require('@/assets/Camiseta-Nike-FC-1.jpg')}}"><img class="imagen" src="@/assets/Camiseta-Nike-FC-1.jpg" width="215px" height="230px"></router-link>
                    <p>Camiseta Nike F.C. Dry Seasonal Graphic</p>
                    <p>29'95€</p></div>
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Camiseta Nike F.C. Primera Equipacion 2019-2020', precio: 54.95, material: 'cuero', stock: 20, imagen: require('@/assets/Camiseta-Nike-FC-2.jpg')}}"><img class="imagen" src="@/assets/Camiseta-Nike-FC-2.jpg" width="215px" height="230px"></router-link>
                    <p>Camiseta Nike F.C. Primera Equipacion 2019-2020</p>
                    <p>54'95€</p></div>
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Camiseta Jordan x PSG LS 2019-2020', precio: 35.96, material: 'cuero', stock: 20, imagen: require('@/assets/Camiseta-Nike-FC-3.jpg')}}"><img class="imagen" src="@/assets/Camiseta-Nike-FC-3.jpg" width="215px" height="230px"></router-link>
                    <p>Camiseta Jordan x PSG LS 2019-2020</p>
                    <p>35'96€</p></div>
                </div>
            </div>-->
        </section>
    
</body>
</template>

<script>
import {db} from '../config'

export default {
    name: 'ropaCalle',
    data(){
        return{
        imagen : '@/assets/Camiseta-Nike-FC-1.jpg',
        mostrar : false,
        calles : {name:'',precio:'',material:''},
        lista : []
        }
        
    },
    mounted(){
        this.mostrar = true;
         db.collection("ropacalleList").get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {this.calles = []
                 this.calles.material = doc.data().material,
                 this.calles.name = doc.data().name,
                 this.calles.precio = doc.data().precio,
                 
                 this.lista.push(this.calles);
                 
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