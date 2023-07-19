import { Post } from '@/types/posts';
import Image from 'next/image';
import { redirect } from 'next/navigation'

interface PostListProps {
    params: {
        slug: string
    }
}

async function getPost(slug: string) {
    const response = await fetch(`${process.env.STRAPI_PUBLIC_API_URL}/api/nextstrapis/?filters[Slug][$eq]=${slug}&populate=FeaturedImage`,{ next: { revalidate: 10 } });
    return response.json();
}

const PostSlug = async ({ params }:PostListProps) => {

    const slug = params.slug

    const postData = await getPost(slug);

    if (!postData.data[0]) {
        redirect('/not-found')
    }
      
    const post: Post = postData.data[0]; // Assuming there is only one post with the given slug

    return (
        <>
        <div className="my-8 px-[8rem] container mx-auto">
            <div className="p-4 rounded-md dark:border-slate-800 dark:bg-slate-800">
            {post.attributes.FeaturedImage && post.attributes.FeaturedImage.data ? (
            <>
              <Image
                src={process.env.STRAPI_PUBLIC_API_URL + post.attributes.FeaturedImage.data.attributes.url}
                width={post.attributes.FeaturedImage.data.attributes.width}
                height={post.attributes.FeaturedImage.data.attributes.height}
                alt={post.attributes.Title}
                className='mx-auto mb-4'
              />
            </>
          ) : null }
                <h1 className='text-2xl font-medium mb-4'>{post.attributes.Title}</h1>
                <p>{post.attributes.Body}</p>
            </div>
        </div>
        </>
    );
};

export default PostSlug;
