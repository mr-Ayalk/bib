// components/WhoWeAre.tsx
import Image from "next/image";
import aboutImage from "../assets/images/aboutpage3.png";

export default function WhoWeAre() {
    return (
        <section className="py-16 bg-white px-4 md:px-8">
            <div className="max-w-[1233px] mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[#6A0DAD] mb-6">
                        Who We Are
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Founded with a vision to bridge the gap between{" "}
                            <span className="text-[#FF6B00]">
                                creativity and technology
                            </span>
                            , Eyoha Digitals emerged from a simple belief: every
                            brand has a unique story worth telling.
                        </p>
                        <p>
                            Our journey began when a group of passionate
                            designers, developers, and strategists came together
                            with one mission - to create that not only look
                            stunning but drive real{" "}
                            <span className="text-[#FF6B00]">
                                digital experiences
                            </span>{" "}
                            business results.
                        </p>
                        <p>
                            Today, we&apos;re proud to be a team of creative
                            minds who believe in the power of collaboration,
                            innovation, and authentic storytelling to transform
                            businesses and connect brands with their audiences.
                        </p>
                    </div>
                </div>
                <div className="relative h-[350px] md:h-[450px] w-full rounded-[24px] overflow-hidden shadow-xl">
                    <Image
                        src={aboutImage}
                        alt="Our Team"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
