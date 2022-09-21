

export default function ApiConsumer ({ keyword = 'greek' }) {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=otRpzRdhk2LbJmF3ERUezAHFt9ElNef8&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            const { data = [] } = responseJson;
            const gifs = data.map(image => {
                const {images, title, id} = image
                const {url} = images.downsized_medium
                return {title, id, url}
            });
            return gifs;
        });    
};