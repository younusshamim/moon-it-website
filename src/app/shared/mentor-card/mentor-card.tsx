import Image from "next/image";
import type { MentorType } from "@/types/mentor";

const MentorCard = ({ mentor }: { mentor: MentorType }) => {
  return (
    <div className="hover:scale-[1.04] duration-500 text-white bg-slate-800 bg-opacity-10 rounded-card shadow-lg overflow-hidden h-full">
      <Image
        className="w-full h-[200px] object-contain object-bottom rounded-t-card bg-sky-100 "
        sizes="100vw"
        width={0}
        height={0}
        src={mentor.picture}
        alt="Moon IT Seminar"
      />
      {/* <div className="px-5 py-2"> */}
      <div className="px-5 py-2">
        <p className="text-xl font-semibold">{mentor.name}</p>
        <p className="text-slate-300">{mentor.title}</p>
      </div>
    </div>
  );
};

export default MentorCard;
