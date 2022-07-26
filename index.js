// API Key

async function getMovies(){
    let res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=e09e20e0&")
    let data = await res.json()
    console.log(data)
}    

getMovies()
