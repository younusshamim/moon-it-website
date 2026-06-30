import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Container from "@/components/container";

const TopBar = () => {
  return (
    <div className="bg-primary dark:bg-card text-primary-foreground border-b border-b-muted">
      <Container className="h-10 flex justify-between items-center">
        <div className="w-full flex items-center justify-between xl:justify-start gap-0 xl:gap-10  font-bold text-sm">
          <div className="flex items-center gap-2">
            <IoIosCall className="text-lg" />
            <p>01785-882381</p>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="text-lg" />
            <p>moon69032@gmail.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
