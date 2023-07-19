"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Post } from '@/types/posts';

interface PostListProps {
  endPoint: string;
  pageSize: number;
}

const fetchData = async (url: string): Promise<{ data: Post[] }> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const PostList = ({ endPoint, pageSize }:PostListProps) => {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchStrapiData = async () => {
      const url = `${process.env.STRAPI_PUBLIC_API_URL}/api/${endPoint}?pagination[pageSize]=${pageSize}&populate=FeaturedImage`;
      const fetchedData = await fetchData(url);
      setData(fetchedData.data);
    };

    fetchStrapiData();
  }, [endPoint, pageSize]);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      {data.map((post) => (
        <div key={post.id} className='mb-8 p-4 rounded-md dark:border-slate-800 dark:bg-slate-800'>
          <Link href={`/posts/${post.attributes.Slug}`}>{post.attributes.FeaturedImage && post.attributes.FeaturedImage.data ? (
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
          </Link>
          <p>{post.attributes.Body}</p>
        </div>
      ))}
    </>
  );
};

export default PostList;
