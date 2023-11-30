import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Blogs = () => {
const [dataBlog, setDataBlogs] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    setLoading(true)

fetch("https://mytour-two.vercel.app/mybkogs")
.then(res => res.json())
.then(d => {
    setLoading(false)
    setDataBlogs(d)


})


}, [])




    return (
     <>

<Helmet>
<title>Blogs - My Tour Best Service in world</title>
<link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
</Helmet>
     
     <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] my-10 mx-[10px]">
            <h2 className="text-center  text-[20px] font-bold my-6">Blogs</h2>

            {
                loading ? <div className='flex justify-center h-[200px]'><span className="loading loading-spinner loading-md"></span></div> :<div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
                {
                    dataBlog.map((d, index) => {
                        console.log(d)

                        return (<div key={index} className="border-[1px] rounded-md p-5 m-4">


                           <div>
                           <h2><span className="font-bold">Title:</span> {d?.title}</h2>
                            <p><span className="font-bold">location:</span> {d?.location}</p>  
                
                            

                            <div className="flex gap-[3px] items-center"><span className="font-bold">Rating:</span>
                            {d?.rating.map((d, index) => {

                                return(<div key={index}>
                                
                                     
                                     <FaStar className="text-orange-400 text-[15px]"></FaStar>


                                </div>)
                            })}
                            </div>

                            
                           </div>
                          <div className="mt-6">
                          <img className="w-full object-cover h-[350px]" src={d?.image_url} alt="img" />
                          </div>
                          <p className="my-6"><span className="font-bold">Content:</span> {d?.content.length >= 18 ? <> {d?.content.slice(0, 18)}
                            <Link to={`/blogsview/${d?._id}`} className="text-orange-500 font-Assistant font-bold hover:text-orange-600">Read More...</Link></> : d?.content}</p>
                            
                            </div>)
                    })
                }
            </div>
            }
            
        </div>
     
     </>
    );
};

export default Blogs;