import Collaborate from "@/app/components/Collaborate";
import getBlogView from "@/lio/getBlogView";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export async function generateMetadata({ params }) {
    const { id } = params;
    const blog_data = await getBlogView(id);

    return {
        title: blog_data.seo_title,
        description: blog_data.seo_description,
    };
}

export default async function BlogView({ params }) {
    const { id } = params;
    const blog_data = await getBlogView(id);
    console.log(
        `https://sd-admin-backend.synexdigital.com/uploads/blog/${id}/${blog_data.blogs_view.thumbnail}`
    );
    return (
        <main>
            <section className="py-20">
                <div className="container mx-auto px-2 flex justify-between">
                    <div className="w-[48%] flex flex-col justify-center">
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold leading-tight text-white">
                            {blog_data.blogs_view.title}
                        </h1>
                        <div className="text-white text-sm mt-7">
                            Share with :
                        </div>
                        <div className="flex gap-x-3 mt-3">
                            <BsTwitterX className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                            <FaFacebookF className="text-white hover:bg-[#151e26] hover:text-gray-300 cursor-pointer bg-[#1d2934] p-2 w-9 h-9 rounded shadow-xl" />
                        </div>
                    </div>
                    <div className="w-[48%]">
                        <Image
                            width={1000}
                            height={1000}
                            alt="Web Image"
                            quality={80}
                            className="rounded-3xl"
                            style={{ width: "100%", height: "390px" }}
                            src={`https://sd-admin-backend.synexdigital.com/uploads/blog/${blog_data.blogs_view.thumbnail}`}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div
                    className="text-white"
                    dangerouslySetInnerHTML={{
                        __html: blog_data.blogs_view.content,
                    }}
                ></div>
            </section>

            <Collaborate />
        </main>
    );
}
