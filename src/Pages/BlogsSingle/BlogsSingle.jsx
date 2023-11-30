import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

import { FaRegCommentDots } from "react-icons/fa";
import { Helmet } from "react-helmet";

const BlogsSingle = () => {
const [blogd, setblogd] = useState([])

const {id} = useParams()


useEffect(() => {

    fetch(`https://mytour-two.vercel.app/blogsingle/${id}`)
    .then(res => res.json())
    .then(d => {
        setblogd(d)
        console.log(d)
    })


}, [id])

    return (
        <>

<Helmet>
<title>Blog Single - My Tour Best Service in world</title>
<link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
</Helmet>
        <div className="mx-[240px] my-10 flex justify-center">

          <div className="p-4 border-[1px] rounded-md w-1/2">
          <h2 className="my-6 font-bold">Blogs</h2>

<div className="my-2">
   <h2><span className="font-bold">Title:</span> {blogd?.title}</h2>
   <h2><span className="font-bold">From:</span> {blogd?.location}</h2>
</div>

<div>
    <p><span className="font-bold">Content: </span>{blogd?.content}</p>
</div>
<div className="my-4">
<img className="w-full h-[500px] "src={blogd?.image_url} alt="" />
</div>

<div className="flex justify-between">
    <div>
        <button className="bg-[#e9e8e8] hover:bg-[#e3e2e2] text-[18px] p-2 font-semibold rounded-md"><FaRegCommentDots></FaRegCommentDots></button>
    </div>

<div className=" flex gap-4">
<div>
<button className="bg-[#ddd] text-[20px] p-1 hover:text-red-500 rounded-md"><AiFillDislike></AiFillDislike></button>
</div>
<div>
<button className="bg-[#ddd] text-[20px] hover:text-blue-500  p-1 rounded-md"><AiFillLike></AiFillLike></button>
</div>
</div>


</div>
          </div>
          
        </div>
        
        </>
        
    );
};

export default BlogsSingle;