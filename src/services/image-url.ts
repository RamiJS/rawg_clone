const getCroppedImageUrl = (url: string) => {
    if(!url) return null
    return url.replace("/media/games/", "/media/crop/600/400/games/");
}

export default getCroppedImageUrl;