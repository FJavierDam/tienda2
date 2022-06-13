<template>
<body>
            <div class="cabeza">
               <h2>Ropa de futbol</h2>
            </div>
        <section>
            <div class="cardList" v-if="mostrar">
            <div class="card" style="width: 12rem;" v-for="(ropaF, index) in lista" :key="index">
                <div class="card-body">
                    <img src="@/assets/linea-striped-division.jpg" width="160px" height="180px">
                    <h5 class="card-title" style="color:black">{{ropaF.name}}</h5>
                    <p class="card-text" style="color:black">{{ropaF.precio}}$</p>
                    <router-link :to="{ name: 'producto', params: {name: ropaF.name, precio: ropaF.precio,
                     material: ropaF.material, imagen: require('@/assets/linea-striped-division.jpg')}}"><button class="btn btn-primary">mostrar</button></router-link>
                </div>
            </div>
        </div>
            <!--<div class="main1">
                <div class="inRow1">
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Linea striped division', precio: 30.35, material: 'cuero', stock: 20, imagen: require('@/assets/linea-striped-division.jpg')}}"><img class="imagen" src="@/assets/linea-striped-division.jpg" width="215px" height="230px"></router-link>
                    <p>Linea striped division</p>
                    <p>30'35€</p></div>
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Linea Trophy', precio: 24.65, material: 'cuero', stock: 20, imagen: require('@/assets/linea-trophy.jpg')}}"><img class="imagen" src="@/assets/linea-trophy.jpg" width="215px" height="230px"></router-link>
                    <p>Linea Trophy</p>
                    <p>24'65€</p></div>
                    <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Linea park derby', precio: 21.80, material: 'cuero', stock: 20, imagen: require('@/assets/linea-park-derby.jpg')}}"><img class="imagen" src="@/assets/linea-park-derby.jpg" width="215px" height="230px"></router-link>
                    <p>Linea park derby</p>
                    <p>21'80€</p></div>
                </div>
            </div>-->
        </section>       
</body>
</template>

<script>
import {db} from '../config'

export default {
    name: 'ropafutbol',
    data(){
        return{
        imagen : '@/assets/linea-striped-division.jpg',
        mostrar : false,
        ropaFs : {name:'',precio:'',material:''},
        lista : []
        }
        
    },
    mounted(){
        this.mostrar = true;
         db.collection("ropafutbolList").get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {this.ropaFs = []
                 this.ropaFs.material = doc.data().material,
                 this.ropaFs.name = doc.data().name,
                 this.ropaFs.precio = doc.data().precio,
                 
                 this.lista.push(this.ropaFs);
                 
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