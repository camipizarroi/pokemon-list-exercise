document.addEventListener("DOMContentLoaded",() => {
    getPokemon();
})

const getPokemon = async () => {
    try {
        let pokemon = [];
        const request = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await request.json();
        data.results.forEach((item, index) => {;
            const newPokemon = {
                name: item.name,
                img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
            }
            pokemon.push(newPokemon);
        });
        setCard(pokemon); 
    } catch (error) {
        console.log(error);
    }
}

const setCard = (pokemon) => {
    let container0 = document.createElement("span");
    document.body.appendChild(container0);
    
    let div = document.getElementsByTagName("span")[0];
    div.id = "container";

    let mostrarInfo = pokemon.map(info => {
        return  '<div>'
                    +'<h2>'+info.name.toUpperCase()+'</h2>'
                    +'<img src='+info.img+' />' 
                +'</div>';
    }).join('')
    document.getElementById("container").innerHTML= mostrarInfo;
}


