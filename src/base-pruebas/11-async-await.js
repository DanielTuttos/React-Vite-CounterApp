
export const getImagen = async () => {

    try {

        const apiKey = 'rj89M3NK3HUWvUNZWPjM2x0rcsARc5D31';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // console.log(error);
        return 'No se encontro la imagen'
    }



}

getImagen();



