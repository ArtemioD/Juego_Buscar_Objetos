const imagenPrin = [['img/01.png', 'img/02.png', 'img/03.png', 'img/04.png', 'img/05.png', 'img/06.png', 
            'img/07.png', 'img/08.png', 'img/09.png', 'img/10.png', 'img/11.png', 'img/12.png', 'img/13.png', 
            'img/14.png', 'img/15.png', 'img/16.png', 'img/17.png', 'img/18.png', 'img/19.png', 'img/20.png'], 
            'img/avisual1.jpg', 'img/avisual2.jpg', 'img/avisual3.jpg', 'img/avisual4.jpg', 'img/avisual5.jpg', 
            'img/avisual6.jpg', 'img/avisual7.jpg', 'img/avisual8.jpg', 'img/avisual9.jpg', 'img/avisual10.jpg', 
            'img/avisual11.jpg', 'img/avisual12.jpg', 'img/avisual13.jpg', 'img/avisual14.jpg', 'img/avisual15.jpg', 
            'img/avisual16.jpg', 'img/avisual17.jpg', 'img/avisual18.jpg', 'img/avisual19.jpg', 'img/avisual20.jpg', 
            'img/avisual.jpg'];

let map = document.getElementById("map");
let buscar = document.getElementById("buscar");
let posicion = map.getBoundingClientRect(); //linias 6 y 10 en mapa.js

let cont = 19;
buscar.src = imagenPrin[0][cont];

const cambiador = (cont) => {
    buscar.src = imagenPrin[0][cont];
    map.src = imagenPrin[cont + 1];
}

const mapa = new Mapa();
mapa.getClick();
