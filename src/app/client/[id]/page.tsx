"use client";

interface Param {
    id: string;
}

const PokemonDetails = ( param: Param) => {

  return (
    <div>
        <h1>Pokemon number: {param.id}</h1>
    </div>
  );
};

export default PokemonDetails;
