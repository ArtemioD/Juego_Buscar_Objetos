class Mapa {
    constructor() {
    }

    getClick = () => {  
        //console.log(`top ${posicion.top}, posicion.right, posicion.bottom, left ${posicion.left}`); // coordinadas de imagen  
        
        map.addEventListener('click', function (e) {
  
            let x = Math.floor(e.clientX - posicion.left);
            let y = Math.floor(e.clientY - posicion.top);
            //console.log( `x = ${Math.floor(e.clientX - posicion.left)}, y = ${Math.floor(e.clientY - posicion.top)}`); //coordinadas del cursor

            if((270 <= x && x <= 283) && (448 <= y && y <= 472) && cont === 19) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[19];
            } 
            else if((737 <= x && x <= 752) && (147 <= y && y <= 170) && cont === 18) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[18];
            } 
            else if((270 <= x && x <= 286) && (128 <= y && y <= 155) && cont === 17) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[17];
            } 
            else if((576 <= x && x <= 635) && (286 <= y && y <= 309) && cont === 16) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[16];
            } 
            else if((649 <= x && x <= 670) && (133 <= y && y <= 153) && cont === 15) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[15];
            } 
            else if(((785 <= x && x <= 795) && (461 <= y && y <= 471)) || 
            ((320 <= x && x <= 337) && (177 <= y && y <= 187)) || 
            ((181 <= x && x <= 195) && (229 <= y && y <= 237)) && cont === 14) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[14];
            }
            else if((280 <= x && x <= 324) && (383 <= y && y <= 409) && cont === 13) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[13];
            } 
            else if((293 <= x && x <= 314) && (74 <= y && y <= 90) && cont === 12) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[12];
            } 
            else if((449 <= x && x <= 468) && (144 <= y && y <= 165) && cont === 11) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[11];
            } 
            else if((674 <= x && x <= 714) && (168 <= y && y <= 213) && cont === 10) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[10];
            } 
            else if((179 <= x && x <= 201) && (266 <= y && y <= 298) && cont === 9) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[9];
            } 
            else if((514 <= x && x <= 532) && (343 <= y && y <= 386) && cont === 8) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[8];
            } 
            else if((202 <= x && x <= 234) && (483 <= y && y <= 516) && cont === 7) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[7];
            } 
            else if((351 <= x && x <= 387) && (436 <= y && y <= 481) && cont === 6) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[6];
            } 
            else if((54 <= x && x <= 71) && (130 <= y && y <= 157) && cont === 5) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[5];
            } 
            else if((173 <= x && x <= 198) && (187 <= y && y <= 208) && cont === 4) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[4];
            } 
            else if((230 <= x && x <= 257) && (196 <= y && y <= 215) && cont === 3) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[3];
            } 
            else if((490 <= x && x <= 510) && (298 <= y && y <= 314) && cont === 2) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[2];
            } 
            else if((769 <= x && x <= 791) && (315 <= y && y <= 340) && cont === 1) {
                cont--;
                buscar.src = imagenPrin[0][cont];
                return map.src = imagenPrin[1];
            } 
            else if((456 <= x && x <= 480) && (163 <= y && y <= 189) && cont === 0) {
                return map.src = imagenPrin[21];
            } 
        });
        
    }

}