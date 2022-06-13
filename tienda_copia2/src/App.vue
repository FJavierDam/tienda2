<template>
<body>
<header>
  <div class="navbar navbar-expand-lg bg-black rounded">
    <div class="container-fluid">
      <router-link to="/">
          <img src="@/assets/soccer.png" width="75px" height="75px">
          </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link to="/botas">Botas de futbol</router-link></li>
          <li class="nav-item"><router-link to="/guantes">Guantes de portero</router-link></li>
          <li class="nav-item"><router-link to="/ropaFutbol">Ropa de futbol</router-link></li>
          <li class="nav-item"><router-link to="/sala">Futbol sala</router-link></li>
          <li class="nav-item"><router-link to="/ropaCalle">Ropa de calle</router-link></li>
          <li class="nav-item"><router-link to="/accesorios">Accesorios varios</router-link></li>
        </ul>
        <router-link to="/carro"><span>{{cartItemsCount}}</span><img src="@/assets/cart.png"></router-link>
            
      </div>
    </div>       
  </div>         
</header>
    
    <main>
      <router-view></router-view>
    </main>  
</body>
    
</template>

<script>

export default {
  name: 'app',
  data(){
        return{
            items:[]
        }
    },
    mounted(){
        this.items = JSON.parse(localStorage.getItem('miCarrito'));
        console.table(this.items);
    },
    computed: {
    cartItemsCount() {
      return this.items.length;
    }
  }
}
</script>

<style>

body{
    color: white;
    background: black;
    font-size: 16px;
}

.carrito{
  position: relative;
  text-align: right;
}

.cart-count {
  text-align: right;
  position: absolute;
  top: 3px;
  left: 22px;
  padding: 0px 7px;
  font-size: 9px;
  background-color: hsl(26, 100%, 55%);
  color: white;
  border-radius: 5px;
}

.buttonCarro{
  background-color: black;
}

.cart-count {
  position: absolute;
  top: 3px;
  left: 22px;
  padding: 0px 7px;
  font-size: 9px;
  background-color: hsl(26, 100%, 55%);
  color: white;
  border-radius: 5px;
}
</style>
