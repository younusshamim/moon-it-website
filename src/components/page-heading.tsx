import { IoCheckmarkCircle } from "react-icons/io5";
import Container from "./container";

type PropsTypes = {
  label: string;
};

const PageHeading = ({ label }: PropsTypes) => {
  return (
    <Container>
      <div className="bg-primary dark:bg-background2 text-white text-4xl text-center py-14 xl:py-20 rounded-md flex gap-3 items-center justify-center my-5">
        <h1 className="spacing font-black">{label}</h1>
        <IoCheckmarkCircle />
      </div>
    </Container>
  );
};

export default PageHeading;
