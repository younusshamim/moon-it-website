import Image from "next/image";
import Modal from "../modal";

type PropsTypes = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  className?: string;
};

const FormSubmittedModal = ({ isOpen, setIsOpen }: PropsTypes) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="py-14 xl:w-[600px]">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo/logo.png"
          alt="Moon IT"
          className="w-[150px] h-auto object-contain"
          height={0}
          width={0}
          sizes="100vw"
        />

        <div className="space-y-1 my-6">
          <h1 className="text-6xl font-extrabold text-primary">অভিনন্দন!</h1>
          <h3 className="font-extrabold text-2xl xl:text-3xl">
            রেজিস্ট্রেশনটি সফলভাবে সম্পন্ন হয়েছে।
          </h3>
        </div>

        <h3 className="font-bold xl:text-xl text-secondary">
          [শীঘ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন]
        </h3>
      </div>
    </Modal>
  );
};

export default FormSubmittedModal;
