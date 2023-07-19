import PostList from "./content/home/postList"

export default async function Home() {

  return (
    <>   
      <div className="container mx-auto">
        <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Next.js Strapi Starter with Auth</h1>
        </div>
        <PostList endPoint="nextstrapis" pageSize={2}/>
      </div>
    </>
  )
}

