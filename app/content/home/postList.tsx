"use client"
import { useState, useEffect } from 'react';

interface Post {
  id: number;
  attributes: {
    Title: string;
    Body: string;
    // Add other fields as needed
  };
}

interface PostListProps {
  endPoint: string;
  pageSize: number;
}

const fetchData = async (url: string): Promise<{ data: Post[] }> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const PostList: React.FC<PostListProps> = ({ endPoint, pageSize }) => {
  const [data, setData] = useState<Post[] | null>(null);

  useEffect(() => {
    const fetchStrapiData = async () => {
      const url = `${process.env.STRAPI_PUBLIC_API_URL}/api/${endPoint}?pagination[pageSize]=${pageSize}`;
      const fetchedData = await fetchData(url);
      setData(fetchedData.data);
    };

    fetchStrapiData();
  }, [endPoint, pageSize]);

  if (!data) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h1>{post.attributes.Title}</h1>
          <p>{post.attributes.Body}</p>
          {/* Render other data fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default PostList;
