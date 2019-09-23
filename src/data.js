const filterByType = (pokemonList, filterValue) => {
    
    const resultType = pokemonList.filter(Element => {
        return Element.type.includes(filterValue);

        //versión marcia
        //return. element.type===condition;

    });

    return resultType;

};

window.filterByType=filterByType;