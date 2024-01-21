
import Postcard from "@/components/postcard/postcard";

const getData = async () => {
    let post = await fetch('http://localhost:3000/api/blog');
    
    if (!post.ok) {
        throw new Error("Something went wrong");
    }
    post = await post.json();
    return post;
}

const Blog = async () => {
    // const [temp, setTemp] = useState(false);
    // setTimeout(() => {
    //     setTemp(true);
    // }, 2000)

    // fetch data with api
    const posts=await getData();

    // Data Fetching with an api call
    // const posts = await getPosts();

    return (
        // temp ?
        <div className="flex gap-5 flex-wrap justify-center items-center mt-10">
            {
                posts.map((post) => (
                    <div className="w-[70%] flex justify-center items-center
                            md:w-[40%]
                            xl:w-[30%]
                            "
                        key={post.id}>
                        <Postcard post={post} />
                    </div>
                ))
            }

        </div>
        // :
        // <Loading />
    )
}
export default Blog;