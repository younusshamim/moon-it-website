import type { MutableRefObject } from "react";

type ObjectRefType = MutableRefObject<{ [key: string]: HTMLElement | null }>;
type SingleRefType = MutableRefObject<HTMLElement | null>;
type RefType = ObjectRefType | SingleRefType;
interface ScrollToSectionProps {
  ref: RefType;
  id: string;
  minusTop?: number;
}
const isObjectRef = (ref: RefType): ref is ObjectRefType => {
  return typeof ref.current === "object" && ref.current !== null;
};

const scrollToSection = ({ ref, id, minusTop = 150 }: ScrollToSectionProps) => {
  let element: HTMLElement | null = null;
  if (isObjectRef(ref)) element = ref.current[id as string] || null;
  else element = ref.current;

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    const adjustScrollPosition = () => {
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementTop - minusTop, behavior: "smooth" });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(adjustScrollPosition);
    });
  }
};

export default scrollToSection;
