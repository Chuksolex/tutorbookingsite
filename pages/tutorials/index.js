import Head from 'next/head';
import Link from 'next/link';

const tutorials = [
  { id: '1', title: 'Intro to React', slug: 'intro-to-react' },
  { id: '2', title: 'Advanced Math', slug: 'advanced-math' },
];

export default function Tutorials() {
  return (
    <>
      <Head>
        <title>Browse Tutorials</title>
        <meta name="description" content="Browse available tutorials and book your slot." />
      </Head>
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Available Tutorials</h1>
        <ul className="list-disc ml-6">
          {tutorials.map(tutorial => (
            <li key={tutorial.id}>
              <Link href={`/tutorials/${tutorial.slug}`} className="text-blue-600 underline">
                {tutorial.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
