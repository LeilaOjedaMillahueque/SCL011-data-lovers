const dataPokemon=window.POKEMON.pokemon;
window.dataPokemon=dataPokemon;
 
const filterByType = (dataPokemon, filterValue) => {
    
    const resultType = pokemonList.filter(Element => {
        return Element.type.includes(filterValue);
        
    });

    return resultType;

};

window.filterByType=filterByType;