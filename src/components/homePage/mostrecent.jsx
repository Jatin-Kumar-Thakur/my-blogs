import Postcard from "../postcard/postcard"

const getData = async () => {
    const url = process.env.BLOG_URL;
    let post = await fetch(url);

    if (!post.ok) {
        throw new Error("Something went wrong");
    }
    post = await post.json();
    return post;
}

const MostRecent = async () => {
    let posts = await getData();
    posts=posts.reverse();
    return (
        <div>
            <h1 className="text-3xl font-bold underline underline-offset-4">Latest Posts</h1>
            <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
                {
                    posts.map((post,i=0) => (
                        i<9 ? <div key={post.slug} className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
                            ">
                            <Postcard post={post}/>
                        </div>
                        : ""
                    ))
                }
            </div>
        </div>
    )
}

export default MostRecent
