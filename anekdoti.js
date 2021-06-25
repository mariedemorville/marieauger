function generate() {
    var jokes = [
        '<img src="1.jpeg">',
        '<img src="2.jpeg">',
        '<img src="3.jpeg">',
        '<img src="4.jpeg">',
        ]

        var lol=document.querySelector(".div-img");
        lol.innerHTML=jokes[Math.floor(Math.random()*jokes.length)];

}