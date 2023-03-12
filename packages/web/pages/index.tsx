import Head from 'next/head';
import Link from 'next/link';
import { groq } from 'next-sanity';
import sanityClient from '../lib/sanityClient';

export const getStaticProps = async () => {
    const posts = await sanityClient.fetch(groq`
        *[_type == "post"] | order(date desc) { _id, title, slug, date, timezone, location, address}
    `);

    return {
        props: {
            posts,
        },
    };
};

interface IndexProps {
    posts: {
        _id: string;
        title: string;
        slug: { current: string; };
        date: string;
        timezone: string;
        location: string;
        address: string;
    }[];
}

const Index: React.FC<IndexProps> = ({ posts }) => {
    return (
        <div>
            <Head>
                <title>Kaylee's Road Trip 2023</title>
            </Head>
            <h1>Kaylee's Road Trip 2023</h1>
            {posts.length > 0 &&
                posts.map(({ _id, title, slug, date }) => (
                    <li key={_id}>
                        <Link href={`/post/${encodeURIComponent(slug.current)}`}>{title}</Link> (
                        {new Date(date).toDateString()})
                    </li>
                ))}
        </div>
    );
};

export default Index;
