console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
     
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json.message.forEach(images => {
            const img = document.createElement("img")
            const imageContainer = document.querySelector("#dog-image-container")
            img.src = images
            imageContainer.appendChild(img)
        }))
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => Object.keys(json.message).forEach(breeds => {
            const breedLi = document.createElement("li")
            const breedContainer = document.querySelector("#dog-breeds")
            breedLi.innerHTML = breeds
            breedContainer.appendChild(breedLi)

            breedLi.addEventListener('click', () => {
                breedLi.style.color = "red"
            })
            
        }))
    })
    

    let selectDropdown = document.querySelector("select#breed-dropdown")
selectDropdown.addEventListener("change", (event) => {
    event.preventDefault()
    const selectedLetter = event.target.value
    const selectedLetter = breeds.filter(breed => breed.startsWith(selectedLetter))
    const listContainer = document.querySelector("#dog-breeds")
    let newList = document.createElement("ul")
    selectedBreeds.forEach(breed => {
        item = document.createElement("li")
        item.innterHTML = breed
        listContainer.append(item)
    })
})






