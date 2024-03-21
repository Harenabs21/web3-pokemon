import React from 'react'

type Props = {}

async function handler() {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
        const data = await response.json();
        //console.log(data);
      
}
handler()

export default function page({}: Props) {
  return (
    <div className='text-center text-3xl font-semibold'>Server page</div>
  )
}