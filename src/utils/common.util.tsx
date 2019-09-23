const IMAGE_DOMAIN = "http://localhost:1337";

const getImageUrl = (imgUrl: string) => `${IMAGE_DOMAIN}${imgUrl}`;

export { getImageUrl };
