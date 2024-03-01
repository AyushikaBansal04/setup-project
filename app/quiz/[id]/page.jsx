/**
Renders a Next.js page component that displays a quiz question and its answer options.
@component
@param {Object} props - The component props.
@param {Object} props.params - The parameters passed to the page component.
@param {string} props.params.id - The ID of the quiz question.
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import { Answer } from '@/components/Answer'
import { endpoint } from '@/utils/endpoint'
import { headers } from 'next/headers';

const getQuizQuestion = async({ id, host }) => {
  const data = await fetch(`https://${host}/api/quiz/${id}`);
  if(!data.ok) throw new Error("Failed to Fetch data");
  return data.json();
}

export default async function Page({ params }) {
  const host = headers().get("host");
  const { question : { title, answers }} = await getQuizQuestion({ id: params.id, host });
  return (
    <Container as="main" className="flex flex-col gap-5 py-5">
      <h1 className="text-lg font-semibold">{title}</h1>
      <Answer answers={answers} questionId={params.id} />
    </Container>
  )
}
