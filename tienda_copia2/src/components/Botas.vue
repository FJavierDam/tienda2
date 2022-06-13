<template>
<body>
    
       <div class="cabeza">
                <h2>Botas de futbol</h2>
            </div>
    <section>
        <div class="cardList" v-if="mostrar">
            <div class="card" style="width: 12rem;" v-for="(bota, index) in lista" :key="index">
                <div class="card-body">
                    <img src="@/assets/bota-nike-tiempo-premier-ii-fg-blackwhite-total-orange-0.jpg" width="160px" height="180px">
                    <h5 class="card-title" style="color:black">{{bota.name}}</h5>
                    <p class="card-text" style="color:black">{{bota.precio}}$</p>
                    <router-link :to="{ name: 'producto', params: {name: bota.name, precio: bota.precio,
                     material: bota.material, imagen: require('@/assets/bota-nike-tiempo-premier-ii-fg-blackwhite-total-orange-0.jpg')}}"><button class="btn btn-primary">mostrar</button></router-link>
                </div>
            </div>
        </div>
        <!--<div class="main1">
            <div class="inRow1">
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Tiempo Premier II FG', precio: 90.00, material: 'cuero', 
                imagen: require('@/assets/bota-nike-tiempo-premier-ii-fg-blackwhite-total-orange-0.jpg')}}">                                                    <img class="imagen" src="@/assets/bota-nike-tiempo-premier-ii-fg-blackwhite-total-orange-0.jpg" width="180px" height="180px"></router-link>
                <p>Tiempo Premier II FG</p>
                <p>90'00€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Phantom Venom FG', precio: 187.50, material: 'cuero', stock: 20, imagen: require('@/assets/Bota-Phantom-Venom-Elite-FG.jpg')}}"><img class="imagen" src="@/assets/Bota-Phantom-Venom-Elite-FG.jpg" width="180px" height="180px"></router-link>
                <p>Phantom Venom FG</p>
                <p>187'50€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Mercurial Superfly VII FG', precio: 229.50, material: 'cuero', stock: 20, imagen: require('@/assets/bota-nike-mercurial-superfly-vii-elite-fg-desert-sand-black-psychic-purple-0.jpg')}}"><img class="imagen" src="@/assets/bota-nike-mercurial-superfly-vii-elite-fg-desert-sand-black-psychic-purple-0.jpg" width="180px" height="180px"></router-link>
                <p>Mercurial Superfly VII FG</p>
                <p>229'50€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Tiempo Legend VIII FG/MG', precio: 52.50, material: 'cuero', stock: 20, imagen: require('@/assets/Bota-tiempo-legend-VIII-academy.jpg')}}"> <img class="imagen" src="@/assets/Bota-tiempo-legend-VIII-academy.jpg" width="180px" height="180px"></router-link>
                <p>Tiempo Legend VIII FG/MG</p>
                <p>52'50€</p></div>
            </div>
            <div class="inRow2">
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'PREDATOR FG', precio: 349.95, material: 'cuero', stock: 20, imagen: require('@/assets/Bota-PREDATOR-ARCHIVE-FG.jpg')}}"> <img class="imagen" src="@/assets/Bota-PREDATOR-ARCHIVE-FG.jpg" width="180px" height="180px"></router-link>
                <p>PREDATOR FG</p>
                <p>349'95€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Bota adidas copa 20.1', precio: 179.95, material: 'cuero', stock: 20, imagen: require('@/assets/bota-adidas-copa-20.1-fg-core-black-night-metallic-0.jpg') } }"><img class="imagen" src="@/assets/bota-adidas-copa-20.1-fg-core-black-night-metallic-0.jpg" width="180px" height="180px"></router-link>
                <p>Copa 20.1 FG</p>
                <p>179'95€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Copa Gloro 20.2 FG', precio: 74.95, material: 'cuero', stock: 20, imagen: require('@/assets/bota-adidas-copa-gloro-20.2-fg-grey-two-silver-metallic-solar-yellow-0.jpg') } }"> <img class="imagen" src="@/assets/bota-adidas-copa-gloro-20.2-fg-grey-two-silver-metallic-solar-yellow-0.jpg" width="180px" height="180px"></router-link>
                <p>Copa Gloro 20.2 FG</p>
                <p>74'95€</p></div>
                <div class="bota"><router-link :to="{ name: 'producto', params: {name: 'Adidas X 19.1 AG', precio: 142.95, material: 'cuero', stock: 20, imagen: require('@/assets/bota-adidas-x-19.4-fxg-bright-cyan-core-black-shock-pink-0.jpg') } }"> <img class="imagen" src="@/assets/bota-adidas-x-19.4-fxg-bright-cyan-core-black-shock-pink-0.jpg" width="180px" height="180px"></router-link>
                <p>Adidas X 19.1 AG</p>
                <p>142'95€</p></div>
            </div>

        </div>-->
    </section>
</body>
    
</template>

<script>
import {db} from '../config'

export default {
    name: 'botas',
    data(){
        return{
        imagen : '@/assets/bota-nike-tiempo-premier-ii-fg-blackwhite-total-orange-0.jpg',
        mostrar : false,
        botas : {name:'',precio:'',material:''},
        lista : []
        }
        
    },
    mounted(){
        this.mostrar = true;
         db.collection("botasList").get().then((querySnapshot) => {
             querySnapshot.forEach((doc) => {this.botas = []
                 this.botas.material = doc.data().material,
                 this.botas.name = doc.data().name,
                 this.botas.precio = doc.data().precio,
                 
                 this.lista.push(this.botas);
                 
                 console.table(this.lista);
             });
             
             });
             
    /**<tr>
        <td><img src="@/assets/bota-nike-tiempo-premier-ii-fg-blackwhite-total-orange-0.jpg"></td>
        <td>${doc.data().name}</td>
        <td>${doc.data().precio}</td>
        <td>${doc.data().material}</td>
        </tr>
        
        var card = document.getElementById('card');
    db.collection("botasList").get().then((querySnapshot) => {
    card.innerHTML = ''; 
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name}`);
        card.innerHTML += `
        <div class="card" style="width: 12rem;">
            <div class="card-body ">
                <h5 class="card-title" style="color:black">${doc.data().name}</h5>
                <p class="card-text" style="color:black">${doc.data().material}</p>
                <p class="card-text" style="color:black">${doc.data().precio}</p>
                <button class="btn btn-primary"><router-link :to="{ name: 'producto', params: {name: '${doc.data().name}', precio: '${doc.data().precio}',
                 material: '${doc.data().material}', imagen: require('@/assets/bota-nike-tiempo-premier-ii-fg-blackwhite-total-orange-0.jpg')}}"></router-link></button>
            </div>
        </div>
        });
        });
        `*/
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
.card{
    margin: 20px;
}
</style>