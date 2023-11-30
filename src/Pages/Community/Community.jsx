import { Helmet } from "react-helmet";


const Community = () => {
    return (

        <>

<Helmet>
  <title>Community - My Tour Best Service in world</title>
  <link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
  </Helmet>
         <div className="xl:mx-[240px] mx-[10px] md:mx-[50px] lg:mx-[150px] my-10 font-Assistant">
            <h2 className="my-6 font-semibold ">Our Community</h2>
            <div className="relative bg-orange-50">
                <img className="w-full  opacity-10 h-[500px]" src="https://i.ibb.co/yFgP0CY/people-2944065-1280.jpg" alt="" />


                <div className="absolute top-0 h-full w-full">
                 <div className="justify-center items-center flex h-full w-full">
                 <div>
                   <p className="xl:w-1/2 lg:w-[90%] md:w-[80%] w-[90%] xl:text-[22px] lg:text-[22px] text-[16px] mx-auto"><span className="text-orange-500 text-center font-semibold">Join our vibrant community</span> of explorers and nature enthusiasts brought together by our shared love for the world's most breathtaking natural wonders. Whether you've embarked on our enchanting tours or simply share a passion for discovering the beauty of our planet, this community is your hub for connection, inspiration, and unforgettable experiences.</p>
                    <button className="px-8 my-6 block mx-auto py-3 hover:bg-orange-600  bg-orange-500 text-white font-bold rounded-md">Join Community</button>
                   </div>
                 </div>


                </div>
            </div>


            <div className="font-Assistant">
                <h2 className="text-center my-20 text-10 font-bold">What We Offer:</h2>

                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-2 items-center">


                    <div className="w-full h-[300px] transition duration-700 ease-in-out hover:bg-orange-50 bg-[#ddd] p-10">
                        <h2 className="font-bold text-center my-4">Engaging Discussions</h2>     
                        <p> Dive into lively discussions about our tour destinations, share travel tips, and exchange stories with fellow adventurers who have experienced the magic of these places.</p>
                    </div>


                    <div className="w-full h-[300px] transition duration-700 ease-in-out hover:bg-orange-50 bg-[#ddd]  p-10">
                        <h2 className="font-bold text-center my-4">Exclusive Content</h2>
                        
                        <p> Gain access to behind-the-scenes stories, stunning visuals, and insider knowledge about our tour stops. Get inspired by captivating content curated by seasoned travelers and nature aficionados.</p>
                    </div>



                    <div className="w-full h-[300px] transition duration-700 ease-in-out hover:bg-orange-50 bg-[#ddd] p-10">

                        <h2 className="font-bold text-center my-4">Meetups and Events</h2>
                        <p> Connect with members in your area or join us for special events, meetups, and workshops that celebrate our shared passion for nature and exploration.</p></div>


               <div className="w-full h-[300px] transition duration-700 ease-in-out hover:bg-orange-50 bg-[#ddd] p-10">
                <h2 className="font-bold text-center my-4">Support and Advice</h2>
             <p>  Seek advice, share insights, and support one another in planning future trips, discovering hidden gems, and making the most of your travel experiences.</p>
               </div>
                    




                </div>



            </div>
            
        </div>
        </>
       
    );
};

export default Community;