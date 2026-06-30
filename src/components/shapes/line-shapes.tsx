import { cn } from "@/lib/utils";

type PropsType = {
  lightClassName?: string;
};

const LineShapes = ({ lightClassName }: PropsType) => {
  return (
    <>
      {/* light moode  */}
      <div
        className={cn(
          "absolute rotate-[-20deg] rounded-3xl bg-sky-400 filter dark:hidden lg:block blur-2xl top-[50px] xl:top-[150px] xl:left-[500px] h-[20px] w-[600px] opacity-100",
          lightClassName,
        )}
      ></div>
      <div
        className={cn(
          "absolute rotate-[-20deg] rounded-3xl bg-secondary filter dark:hidden lg:block blur-2xl top-[150px] xl:top-[240px] xl:left-[500px] h-[20px] w-[600px] opacity-100",
          lightClassName,
        )}
      ></div>

      {/* dark mode  */}
      <div className="absolute left-[28%] top-28 hidden rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>
    </>
  );
};

export default LineShapes;
