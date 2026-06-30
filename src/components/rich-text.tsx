import { cn } from "@/lib/utils";

type PropsTypes = {
  html: string;
  className?: string;
};

const RichText = ({ html, className }: PropsTypes) => {
  return (
    <div
      className={cn("rich-content", className)}
      // biome-ignore lint/security/noDangerouslySetInnerHtml: rich content authored in our own data (future: sanitized CMS source)
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default RichText;
