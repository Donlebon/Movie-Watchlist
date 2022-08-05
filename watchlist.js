let searchList = document.querySelector(".searchlist")
let explore = document.querySelector(".explore-container")
let watchList = document.querySelector(".watchlist")
let clear = document.querySelector(".clear-watchlist")

function clearStorage(e){
    localStorage.clear()
    location.reload()
    e.target.classList.remove("picker-original")
    e.target.classList.add("picker-clicked")
    setTimeout(() => {
        e.target.classList.remove("picker-clicked")
        e.target.classList.add("picker-original")
        }, 125)
}

clear.addEventListener("click", clearStorage)


for(let i = 0; i < localStorage.length; i++){
    explore.remove()
    let newDiv = document.createElement("article")
    newDiv.classList.add("container")
    newDiv.classList.add("flex")
    searchList.appendChild(newDiv)
    let storedMovie = JSON.parse(localStorage.getItem("movie" + i))
    newDiv.innerHTML += storedMovie[0]
}


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


let container = document.querySelectorAll(".container")
let iconRemove = document.querySelectorAll(".icon-remove")

// console.log(container[0].innerText.includes("The Last: Naruto the Movie"))

let localElement = container[0].innerHTML;
let localMovie = JSON.parse(localStorage.getItem("movie0"));

for(let i = 0; i < iconRemove.length; i++){
    iconRemove[i].addEventListener("click", function(e){
        // if(e.composedPath().length == 10){
        //     e.composedPath()[4].remove()
        // } else if(e.composedPath().length == 11){
        //     e.composedPath()[5].remove()
        // }
        if(e.composedPath()[5] == container[0]){
            console.log("true")
        } else{
            console.log("false")
        }
    })
}


// console.log(localElement)
// console.log(localMovie[0])


// if (localElement == localMovie[0]){
//     console.log("true")
// } else{
//     console.log("false")
// }



// function removeFromList(){
//     localStorage.removeItem("movie0")
// }

