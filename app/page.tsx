import PostList from "@/app/components/content/home/postList"

export default async function Home() {

  return (
    <>   
      <div className="container mx-auto">
        <div className="text-center">
        <h1 className="text-5xl font-bold my-8">Next.js Strapi Starter with Auth</h1>
        </div>
        <div className="lg:px-[8rem] py-8">
          <PostList endPoint="nextstrapis" pageSize={2}/>
        </div>
      </div>
    </>
  )
}

