import GradientText from "@/components/gradient-text";
import SeminarForm from "./seminar-form";

const SeminarContent = () => {
  return (
    <div className="w-full md:w-3/5 p-3 md:p-10 z-40">
      <h1 className="spacing text-3xl mb-[6px] font-black text-foreground-dark text-center">
        জয়েন <GradientText>ফ্রি সেমিনার</GradientText>
      </h1>

      <h2 className="text-center mb-10">
        ফর্মটি পূরণ করার পর আমাদের প্রতিনিধি শীঘ্রই সেমিনারের সময় এবং বিস্তারিত আপনাকে
        জানিয়ে দিবেন।
      </h2>

      <SeminarForm />
    </div>
  );
};

export default SeminarContent;
