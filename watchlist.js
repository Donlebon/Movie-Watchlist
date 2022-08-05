let searchList = document.querySelector(".searchlist")
let explore = document.querySelector(".explore-container")
let watchList = document.querySelector(".watchlist")
let clear = document.querySelector(".clear-watchlist")

function clearStorage(e){
    localStorage.clear()
    e.target.classList.remove("picker-original")
    e.target.classList.add("picker-clicked")
    setTimeout(() => {
        e.target.classList.remove("picker-clicked")
        e.target.classList.add("picker-original")
        }, 125)
    setTimeout(() => { 
        location.reload()
    }, 150)
}

clear.addEventListener("click", clearStorage)

function getTotalMovies(){
    let movieStorage = Object.keys(localStorage)
    return movieStorage
}

getTotalMovies().forEach(element => {
    explore.remove()
    let newDiv = document.createElement("article")
    newDiv.classList.add("container")
    newDiv.classList.add("flex")
    searchList.appendChild(newDiv)
    let storedMovie = JSON.parse(localStorage.getItem(element))
    newDiv.innerHTML = storedMovie
})  


let added = document.querySelectorAll(".added")

function addRemove(){
    for(let i = 0; i < added.length; i++){
        added[i].classList.remove("added")
        added[i].innerHTML = `
        <svg width="16" height="16"viewBox="0 0 16 16" fill="none" class = "icon-remove" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55229 12 8C12 7.44772 11.5523 7 11 7H5Z" fill="#111827"/>
        </svg>
        <h5 class="watchlist-movies">Remove</h5>`
    }
}

addRemove()

let movieTitle = document.querySelectorAll(".movie-title")

let container = document.querySelectorAll(".container")
let iconRemove = document.querySelectorAll(".icon-remove")

function checkifMatches(e, checkTitle, checkPlot){
    getTotalMovies().forEach((element, index) => {
        let localMovie = JSON.parse(localStorage.getItem(element))
        if(localMovie[0].includes(checkTitle) && localMovie[0].includes(checkPlot)){
            localStorage.removeItem(element)
        }
    })
}




iconRemove.forEach(element => {
    element.addEventListener("click", function(e){
        if(e.composedPath().length == 10){
            let checkPlot = e.composedPath()[3].children[2].innerText
            let checkTitle = e.composedPath()[3].children[0].firstElementChild.innerText
            checkifMatches(e, checkTitle, checkPlot)
            location.reload()
        } else if(e.composedPath().length == 11){
            let checkPlot = e.composedPath()[4].children[2].innerText
            let checkTitle = e.composedPath()[4].children[0].firstElementChild.innerText
            checkifMatches(e, checkTitle, checkPlot)
            location.reload()
        }
    })
})