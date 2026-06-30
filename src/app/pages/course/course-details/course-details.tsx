import Image from "next/image";
import SpringyScroll from "@/components/animations/SpringyScroll";
import Container from "@/components/container";
import LineShapes from "@/components/shapes/line-shapes";
import type { CourseType } from "@/types/course-legacy";

import FeeAndDiscount from "./fee-and-dis

t";

const CourseDetails = ({ course }: { course: CourseType 
 => {
  
nst {
  
name,
    descri
ion1,
    descri
ion2,
    descri
ion3,
 
 fee,
    di
ount,
   
mage,
  } = 

se;

  r
urn (
    <Container className="pb-10 lg:py-10 flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 rel
ive">
      <LineShapes lightClassName="left-[350

 />

      <div className="flex flex-col gap-5 w-full lg:w-1/2
-40">
        <h1 className="text-4xl text-foreground font-extrabold">{nam
</h1>
        <div className="text-justify flex flex-col gap-3 text-[
px]">
          <h2>{description
</h2>
          <h2>{description
</h2>
          <h2>{description
</h2>
       

iv>

        <FeeAndDiscount course={cou
e} />
     

iv>

      <div className="w-full lg:w-1/2
-40">
        <Springy
roll>
         
Image
            className="w-full lg:h-[390px] object-cover object-center rounded-card shadow-lg  hover:scale-[1.02] transition-all durati
-500"
            sizes=
00vw"
            wi
h={0}
            hei
t={0}
            src=
mage}
            alt
name}
     
   />
        </Springy
roll>
     
/div>
    </Con
iner

 


};

export default CourseD
ails;
