import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters({ host }) {
  const data = await fetch(`https://${host}/api/characters`)
  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getCharacterBySlug({ slug, host }) {
  const data = await fetch(`https://${host}/api/characters/${slug}`);
  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

