// 54WWYNQL8LTQ

let urls = []
async function test(){
    let button = document.querySelector('button');
    button.style.display = 'none';
    fetchGifs().then(gifs => {
        console.log(gifs)
        console.log(gifs.results[0].media[0].gif.url)
        for (let gif of gifs.results) {
            urls.push(gif.media[0].gif.url)
        }
        console.log(urls)
    })
}

async function fetchGifs() {
    const response = await fetch('https://g.tenor.com/v1/search?key=54WWYNQL8LTQ&q=quit') 
    const gifs = await response.json()
    
    return gifs
}