export const ImageRoom = (imageName: string) => {
    //return new URL(`../../public/${imageName}`, import.meta.url).href;
    return '/public/'+imageName;
}
export const ImageGallery = (imageName : string) => {
    return new URL(`../assets/rooms/${imageName}`, import.meta.url).href;
}