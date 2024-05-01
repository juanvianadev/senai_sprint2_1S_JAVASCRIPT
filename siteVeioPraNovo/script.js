function mudarInteiro(){
    
    document.getElementById("navbar").style.backgroundColor = "#000000"
    document.getElementById("navbar").style.textTransform = "uppercase"
    document.getElementById("navbar").style.fontFamily = "Arial"

    var x = document.getElementById("navbar")
    var y = x.getElementsByTagName("a")
    var i;

    for (i = 0; i < y.length; i++) {
        y[i].style.color = "white"
        y[i].innerHTML = "sim 0 1";
    }

    document.querySelector("a").innerHTML = "Regrecao 1.0"


    var img = document.getElementsByTagName("body")[0]
    img.style.backgroundImage = "url(img/preto.jpg)"

    var img2 = document.getElementsByTagName("section")[0]
    img2.style.backgroundImage = "url(img/preto.jpg)"

    var img3 = document.getElementById("cavernosos")
    img3.setAttribute("src", "/img/robo1.png")

    var img4 = document.getElementById("ugabuga1")
    img4.setAttribute("src", "/img/roboperfil.png")

    var img5 = document.getElementById("tv")
    img5.setAttribute("src", "/img/terra.gif")

    var div = document.getElementById("apaga");
    div.remove();

    document.querySelector("h1").innerHTML = "ChatGPT";

    document.getElementById("texto").style.fontFamily = "Arial"
    document.querySelector("p").innerHTML = "-Sim!";

    document.getElementById("apaga").style.display = "none"

    
}