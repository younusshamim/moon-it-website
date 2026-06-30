import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

type PropsTypes = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  triggerBtn?: ReactNode;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Modal = ({
  isOpen,
  setIsOpen,
  triggerBtn,
  children,
  className,
  size,
}: PropsTypes) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {triggerBtn && <DialogTrigger asChild>{triggerBtn}</DialogTrigger>}

      <DialogContent
        className={cn(
          "max-w-screen-md max-h-screen overflow-y-auto border-muted z-50",
          className,
          {
            "max-w-screen-sm": size === "sm",
            "max-w-screen-md": size === "md",
            "max-w-screen-lg": size === "lg",
          },
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
