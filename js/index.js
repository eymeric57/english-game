const rules1 = document.getElementById("rules1")
const game4 = document.getElementById("game4");
const game1 = document.getElementById("game1")



var clearButton = document.getElementById("save");

clearButton.addEventListener("click", function() {
    localStorage.clear();
    alert("Attention la sauvegarde va etre suprimer");
    location.reload()
});


game1.addEventListener("click", ( )=> {
    document.location.href = "../html/game1.1.html";

});

game1.addEventListener("mouseover", () => {
rules1.style.display = "grid";
main1.style.filter = "blur(5px)"
});


game1.addEventListener ("mouseout", () => {
    rules1.style.display = "none"
    main1.style.filter = "blur(0px)";
})




game4.addEventListener("click", () => {
    reload ()
})


game2.addEventListener("click", ( )=> {
    document.location.href = "../html/game3.html";

});
game2.addEventListener("mouseover", () => {
    rules2.style.display = "grid";
    main1.style.filter = "blur(5px)"
    });
    
game2.addEventListener ("mouseout", () => {
    rules2.style.display = "none"
    main1.style.filter = "blur(0px)";
})



game3.addEventListener("click", ( )=> {
    document.location.href = "../html/game4.html";

});
game3.addEventListener("mouseover", () => {
    rules3.style.display = "grid";
    main1.style.filter = "blur(5px)"
    });
    
game3.addEventListener ("mouseout", () => {
    rules3.style.display = "none"
    main1.style.filter = "blur(0px)";
})
    

