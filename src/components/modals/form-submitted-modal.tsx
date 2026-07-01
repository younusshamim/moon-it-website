import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Modal from "../modal";
import PrimaryButton from "../primary-button";

type PropsTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
};

const FormSubmittedModal = ({ isOpen, setIsOpen }: PropsTypes) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className="py-12 px-6 sm:w-[560px] overflow-hidden"
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo/logo.png"
          alt="Moon IT"
          className="w-[110px] h-auto object-contain opacity-90"
          height={0}
          width={0}
          sizes="100vw"
        />

        <div className="relative mt-6 mb-5">
          <div className="absolute inset-0 rounded-full bg-primary/15 blur-2xl" />
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-lighter to-primary shadow-lg shadow-primary/30">
            <CheckCircle2
              className="w-10 h-10 text-primary-foreground"
              strokeWidth={2}
            />
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <h1 className="text-3xl xl:text-4xl font-extrabold text-primary">
            অভিনন্দন!
          </h1>
          <h3 className="font-bold text-lg xl:text-xl text-foreground">
            রেজিস্ট্রেশনটি সফলভাবে সম্পন্ন হয়েছে।
          </h3>
          <p className="text-sm xl:text-base text-muted-foreground">
            শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।
          </p>
        </div>

        <PrimaryButton onClick={() => setIsOpen(false)}>ঠিক আছে</PrimaryButton>
      </div>
    </Modal>
  );
};

export default FormSubmittedModal;
