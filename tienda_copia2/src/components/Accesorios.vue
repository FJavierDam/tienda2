<template>
    <body>
            <div class="cabeza">
                <h2>Accesorios</h2>
            </div>
        
        <section>
            <div class="cardList" v-if="mostrar">
                <div class="card" style="width: 12rem;" v-for="(accesorio, index) in lista" :key="index">
                    <div class="card-body">
                        <img src="@/assets/balon-finale-estambul.jpg" width="160px" height="180px">
                        <h5 class="card-title" style="color:black">{{accesorio.name}}</h5>
                        <p class="card-text" style="color:black">{{accesorio.precio}}$</p>
                        <router-link :to="{ name: 'producto', params: {name: accesorio.name, precio: accesorio.precio,
                         material: accesorio.material, imagen: require('@/assets/balon-finale-estambul.jpg')}}"><button class="btn btn-primary">mostrar</button></router-link>
                    </div>
                </div>
            </div>
            <!--<div class="main1">
                <div class="inRow1">
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Bolsa AC Milan Pro Training Gym Sack', precio: 19.95, material: 'cuero', stock: 20, imagen: require('@/assets/bolsa-milan.jpg')}}"><img class="imagen" src="@/assets/bolsa-milan.jpg" height="230px"></router-link>
                    <p>Bolsa AC Milan Pro Training Gym Sack</p>
                    <p>19'95€</p></div>
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Balon Premier League Merlin 2019-2020', precio: 134.95, material: 'cuero', stock: 20, imagen: require('@/assets/balon-premier.jpg')}}"><img class="imagen" src="@/assets/balon-premier.jpg" width="215px" height="230px"></router-link>
                    <p>Balon Premier League Merlin 2019-2020</p>
                    <p>134'95€</p></div>
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Balon Finale Estambul Pro', precio: 139.50, material: 'cuero', stock: 20, imagen: require('@/assets/balon-finale-estambul.jpg')}}"><img class="imagen" src="@/assets/balon-finale-estambul.jpg" width="215px" height="230px"></router-link>
                    <p>Balon Finale Estambul Pro</p>
                    <p>139'50€</p></div>
                </div>
            </div>-->
        </section>
    
</body>
    
</template>

<script>
import {db} from '../config'

export default {
    name: 'accesorios',
    data(){
        return{
        imagen : '@/assets/balon-finale-estambul.jpg',
        mostrar : false,
        accesorios : {name:'',precio:'',material:''},
        lista : []
        }
        
    },
    mounted(){
        this.mostrar = true;
         db.collection("accesoriosList").get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {this.accesorios = []
                 this.accesorios.material = doc.data().material,
                 this.accesorios.name = doc.data().name,
                 this.accesorios.precio = doc.data().precio,
                 
                 this.lista.push(this.accesorios);
                 
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

.bota:hover .imagen {-webkit-transform:scale(0.8);transform:scale(0.8);}
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