import Image from "next/image";
import Icon from "@/public/assets/loadicon.svg";

export default function Loading() {
    return (
        <section className="text-white absolute w-full !h-screen z-50 bg-[#260533]">
            <div className="flex justify-center items-center !h-screen bg-[#260533]">
                <p className="text-white animate-spin bg-[#260533]">
                    <Image src={Icon} alt="loading Icon" />
                </p>
            </div>
        </section>
    );
}
