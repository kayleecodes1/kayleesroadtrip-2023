import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
//import { PortableText } from '@portabletext/react';
import sanityClient from '../../lib/sanityClient';

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`);

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    };
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = '' } = context.params;
    const post = await sanityClient.fetch(
        groq`*[_type == "post" && slug.current == $slug][0]{ title, date, timezone, location, address, content }`,
        { slug },
    );
    return {
        props: {
            post,
        },
    };
}

function urlFor(source) {
    return imageUrlBuilder(sanityClient).image(source);
}

const ptComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(320).height(240).fit('max').auto('format')}
                />
            );
        },
    },
};

interface PostProps {
    post: {
        title: string;
        date: string;
        timezone: string;
        location: string;
        address: string;
        content: unknown;
    };
}

const Post: React.FC<PostProps> = ({ post }) => {
    const { title, date, timezone, location, address, content } = post;
    return (
        <article>
            <h1>{title}</h1>
            {/*<PortableText value={body} components={ptComponents} />*/}
        </article>
    );
};

export default Post;
