/**

Renders a Next.js page component that displays a grid of character avatars with links to individual character pages.
@component
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { getAllCharacters } from '@/lib/characters';
import { headers } from 'next/headers';


export default async function Page() {

  const host = headers().get("host");
  const data = await getAllCharacters({ host });
  return (
    <main>
      <Container className='grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4'>
        {
          data?.characters?.map((item) => {
            return (
              <Link 
                key={item.name}
                className='overflow-hidden rounded-md'
                href={`/characters/${item.slug}`}>
              <Image src={item.avatar} alt={item.name} className='transition-all duration-500 hover:scale-110 hover:-rotate-2' width={500} height={500}/>
              </Link>
            )
          })
        }
      </Container>
    </main>
  )
}
