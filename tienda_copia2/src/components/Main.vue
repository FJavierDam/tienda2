<template>
    <div class="borde">
        <ul class="ch-grid">
        <div class="inRow1">
	<li>
		<div class="ch-item ch-img-1">
            <div class="ch-info">
            	<router-link to="/botas"><h3>Botas de futbol</h3></router-link>
			</div>
		</div>
	</li>
	<li>
		<div class="ch-item ch-img-2">
            <div class="ch-info">
                <router-link to="/guantes"><h3>Guantes de portero</h3></router-link>
			</div>
		</div>
	</li>
	<li>
		<div class="ch-item ch-img-3">
            <div class="ch-info">
                <router-link to="/ropaFutbol"><h3>Ropa de futbol</h3></router-link>
			</div>
		</div>
	</li>
        </div>
        <div class="inRow2">
            <li>
		<div class="ch-item ch-img-4">
			<div class="ch-info">
                <router-link to="/sala"><h3>Futbol sala</h3></router-link>
			</div>
		</div>
	</li>
	<li>
		<div class="ch-item ch-img-5">
			<div class="ch-info">
                <router-link to="/ropaCalle"><h3>Ropa de calle</h3></router-link>
			</div>
		</div>
	</li>
	<li>
		<div class="ch-item ch-img-6">
			<div class="ch-info">
                <router-link to="/accesorios"><h3>Varios de futbol</h3></router-link>
			</div>
		</div>
	</li>
        </div>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'main'
}
</script>

<style>
    h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
*{
    outline: none;
    text-decoration: none;
}

body{
    color: white;
    background: black;
    font-size: 16px;
}


.menu{
    display: flex;
    text-decoration: none;
    font-family: fantasy;
    align-items: center;
    margin-left: 19rem;
    margin-right: 19rem;
    margin-top: -4rem;
    
}

.separador{
    margin-left: 1rem;
    margin-right: 1rem;
}

.icono{
    margin-left: 4em;
    margin-top: 2em;
    
}

.borde{
    border: 1px solid black;
    margin-top: 1em;
    
}

.ch-grid {
	margin: 20px 0 0 0;
	padding: 0;
	list-style: none;
	display: block;
	text-align: center;
	width: 100%;
    color: #fff;
}

.ch-grid:after,
.ch-item:before {
	content: '';
    display: table;
}

.ch-grid:after {
	clear: both;
}

.ch-grid li {
	width: 200px;
	height: 200px;
	display: inline-block;
	margin: 20px;
}

.ch-item {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	overflow: hidden;
	position: relative;
	cursor: default;
	box-shadow: 
		inset 0 0 0 16px rgb(255, 255, 255),
		0 1px 2px rgba(0,0,0,0.1);
	transition: all 0.4s ease-in-out;
}

.ch-img-1 { 
	background-image:url(../assets/botaDeFutbolPrincipal.jpg)
}

.ch-img-2 { 
	background-image: url(../assets/guante-portero-principal.jpg);
}

.ch-img-3 { 
	background-image: url(../assets/ropa-de-futbol-principal.jpg);
}

.ch-img-4 { 
	background-image: url(../assets/futbol-sala-principal.jpg);
}

.ch-img-5 { 
	background-image: url(../assets/ropa-de-calle-principal.jpg);
}

.ch-img-6 { 
	background-image: url(../assets/accesorios-principal.jpg);
}

.ch-info {
	position: absolute;
	background: rgba(63,147,147, 0.8);
	width: inherit;
	height: inherit;
	border-radius: 50%;
	overflow: hidden;
	opacity: 0;
	transition: all 0.4s ease-in-out;
	transform: scale(0);
}

.ch-info h3 {
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 22px;
	margin: 0 30px;
	padding: 45px 0 0 0;
	height: 140px;
	font-family: 'Open Sans', Arial, sans-serif;
	text-shadow: 
		0 0 1px #fff, 
		0 1px 2px rgba(0,0,0,0.3);
}

.ch-info p {
	color: #fff;
	padding: 10px 5px;
	font-style: italic;
	margin: 0 30px;
	font-size: 12px;
	border-top: 1px solid rgba(255,255,255,0.5);
	opacity: 0;
	transition: all 1s ease-in-out 0.4s;
}

.ch-info p a {
	display: block;
	color: rgba(255,255,255,0.7);
	font-style: normal;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 9px;
	letter-spacing: 1px;
	padding-top: 4px;
	font-family: 'Open Sans', Arial, sans-serif;
}

.ch-info p a:hover {
	color: rgba(255,242,34, 0.8);
}

.ch-item:hover {
	box-shadow: 
		inset 0 0 0 1px rgba(255,255,255,0.1),
		0 1px 2px rgba(0,0,0,0.1);
}

.ch-item:hover .ch-info {
	transform: scale(1);
	opacity: 1;
}

.ch-item:hover .ch-info p {
	opacity: 1;
}

a:link, a:visited{
    text-decoration: none;
    color: white;
}
</style>