import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';



const Home: NextPage = () => {
  return (
      /*agregar estilos className="bg-green-500"  */
    <div className='bg-green-500'>
      {/*copiar un link */}
      <p>pagina de index</p>
      <Link href='/admin/usuarios'>
        {/*className='cursor-pointer' para agregar el puntero */}
        <p className='cursor-pointer'>Ir a admin usuarios</p>
      </Link>

    </div>
  );
};

export default Home
