<script setup>

const accesKey = 'tDmWuSHock3LaL3PHw3p260slWA-Rf5PPVTWa913kEY';
const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(query) {
    //The code will be here
    let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);

    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    createImages(imagesList);
}

function createImages(imagesList) {
    for (let i = 0; i < imagesList.length; i++) {
        const image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        let idContenedor = document.getElementById("idContenedor")
        let br = document.createElement('br');

        // document.body.appendChild(image);
        idContenedor.appendChild(image);
        idContenedor.appendChild(br);

    }
    // createImages(imagesList);

}

getImages('freestyle');

</script>

<template>
    <div id="idContenedor"></div>
</template>

<style>
#idContenedor {}

img {
    width: 100%;
    object-fit: cover;
}
</style>