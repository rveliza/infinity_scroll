// Unsplash API
const count = 10;
const apiKey = 'Ch2faVi_0p0ON5MaA8X-Xd4Hu90V80aPf1Z7WYpleME';

const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


const getPhotos = async() => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        // Catch Error here
    }
}

// On Load
getPhotos();