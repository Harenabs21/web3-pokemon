import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Pokemon {
  name: string;
  url: string;
  image: string;
}

async function getNameAndImageOfPokemon() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  const data = await response.json();
  const details = await Promise.all(
    data.results.map(async (poke: Pokemon) => {
      const detailResponse = await fetch(poke.url);
      const detailData = await detailResponse.json();
      return { ...poke, image: detailData.sprites.front_default };
    })
  );
  const result = details as Pokemon[];

  return result;
}

async function PokemonList() {
  const pokemons = await getNameAndImageOfPokemon();

  return (
    <div className=" flex flex-wrap gap-3 items-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
      {pokemons.map((poke, index) => {
        const id = poke.url.split("/")[6];
        return (
          <div
            className="group flex gap-3 flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            key={index}
          >
            <Image
              src={poke.image}
              alt={poke.name}
              width={100}
              height={100}
              priority
            />
            <p>{poke.name}</p>
            <div>
              <Link href={`server/${id}`}>
                <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
getNameAndImageOfPokemon();

export default function page() {
  return (
    <div>
      <h1 className="text-center text-white text-3xl font-semibold">Server page</h1>
      <div className=" flex flex-wrap gap-3 items-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <PokemonList />
      </div>
    </div>
  );
}
