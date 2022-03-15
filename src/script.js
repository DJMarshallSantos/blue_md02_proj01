
const alias = document.getElementById("alias");
const estatus = document.getElementById("condition");
const img = document.getElementById("img");
const mudar = document.querySelector("#mudar");

mudar.addEventListener("click", function(){
        if (mudar.value == 1){
            alias.innerText = ' Superman';
            estatus.innerText = ' Homem de Aço';
            img.src='./medias/img/manOfSteel.png';
            mudar.value = 2;
        }else if(mudar.value == 2){
            alias.innerText = ' Kal-El';
            estatus.innerText = ' Traje Kryptoniano';
            img.src='./medias/img/blackSuit.png';
            mudar.value = 3;    
        }else{
			alias.innerText = ' Clark Kent';
            estatus.innerText = ' Reporter';
            img.src='./medias/img/cK.png';
			mudar.value = 1;
		}

})


window.onload = function() {
    document.getElementById("my-audio").play();
}
