function changeImage(name) {
    // Muda a imagem quando clica nela
    const src = `img/${name}.jpg`;
    const image = document.getElementById("big-image");
    image.src = src;

    //Tirar a borda dos outros itens
    const item = document.getElementsByClassName("selected")[0];
    item.classList.remove("selected");

    // Muda a borda de acordo com a img selecionada
    const clicked = document.getElementById(`item-${name}`);
    clicked.classList.add("selected");
}