// 54WWYNQL8LTQ

let urls = []
function test(){
    let button = document.querySelector('button');
    let main = document.querySelector('main')
    main.style.padding = "0"
    button.style.display = 'none';
    fetchGifs().then(gifs => {
        console.log(gifs)
        console.log(gifs.results[0].media[0].gif.url)
        for (let gif of gifs.results) {
            urls.push(gif.media[0].gif.url)
        }
        console.log(urls)
        buildImgs()
    })
    
}

function buildImgs(){
    const parent = document.querySelector('section')
    for (let url of urls) {
        let img = document.createElement('img')
        img.src = url
        parent.appendChild(img)
    }

}

async function fetchGifs() {
    const response = await fetch('https://g.tenor.com/v1/search?key=54WWYNQL8LTQ&q=iquit') 
    const gifs = await response.json()
    
    return gifs
}