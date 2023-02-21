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
        document.body.appendChild(image);
    }
    // createImages(imagesList);

}

getImages('epic');
