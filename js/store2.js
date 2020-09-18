'use script'

function loadClothes() {
    return fetch('deta/data2.json').then(response => console.log());
}

//main
loadClothes()
    .then(clothes => {
        // displaycClothes(clothes);
        // setEventListeners(clothes)
     })
    .catch(consloe.log)