export const gifConsumer = (keyword = 'panda') => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=otRpzRdhk2LbJmF3ERUezAHFt9ElNef8&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

   return fetch(url)
        .then(res => res.json())
        .then(response => {
                const { data = [] } = response;

                const gifs = data.map( gif =>  gif.images.downsized_medium.url )
            
                console.log(gifs)
        })
        .catch(error => {
            console.error("Error in the response of API." + error)
        });


}