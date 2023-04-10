import noImage from '../assets/No-Image-Placeholder.svg.webp';
const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage
    return url.replace("/media/games/", "/media/crop/600/400/games/");
}

export default getCroppedImageUrl;