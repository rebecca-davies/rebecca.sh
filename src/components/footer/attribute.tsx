import Link from "next/link";

const Attribute = () => {

    return (
        <div className="absolute flex flex-col gap-1 items-center justify-center bg-[#0f0734] w-full pb-4 pt-52 pl-4 pr-4">
            <p className="text-purple-100 text-center text-sm tracking-wide opacity-70 mb-3">This site is powered by <span className="text-[#dcff2d] font-bold">Next.js</span>, <span className="text-[#dcff2d] font-bold">Tailwind</span>, <span className="text-[#dcff2d] font-bold">Prisma</span> and <span className="text-[#dcff2d] font-bold">tRPC</span> and is open-sourced <Link href='https://github.com/rebecca-davies/rebecca' className="text-[#dcff2d] font-bold">here</Link>.</p>
            <p className="text-purple-100 text-center text-sm tracking-wide opacity-70">Designed and Built by <span className="text-[#dcff2d] font-bold">Rebecca Davies</span> with thanks to <Link href='https://brittanychiang.com/' className="text-[#dcff2d] font-bold">Brittany Chiang</Link> for some design elements! ❤️</p>
        </div>
    );
};

export default Attribute;