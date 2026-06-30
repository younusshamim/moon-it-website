import type { ReactNode } from "react";
import {
  DrawerContent,
  DrawerTrigger,
  Drawer as ShadcnDrawer,
} from "@/components/ui/drawer";

type PropsTypes = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  triggerBtn?: ReactNode;
  children: ReactNode;
  className?: string;
  direction?: "right" | "bottom" | "left" | "right";
};

const Drawer = ({
  isOpen,
  setIsOpen,
  triggerBtn,
  children,
  className,
  direction = "right",
}: PropsTypes) => {
  return (
    <ShadcnDrawer direction={direction}>
      {triggerBtn && <DrawerTrigger asChild>{triggerBtn}</DrawerTrigger>}

      <DrawerContent>{children}</DrawerContent>
    </ShadcnDrawer>
  );
};

export default Drawer;
