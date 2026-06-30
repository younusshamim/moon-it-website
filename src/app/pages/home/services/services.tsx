import ServicesSection from "@/app/shared/services-section/services-section";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import servicesData from "../../../../data/services-data";

const Services = () => {
  return (
    <div className="section-padding-sm">
      <Container>
        {/* <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-[6px]">
          আমাদের <GradientText>বিশেষ সেবা</GradientText>
        </h2>
        <p className="font-semibold mb-8 text-center">
          কেন মুন আইটি-তে আস্থা রাখবে?
        </p> */}

        <h2 className="text-4xl text-foreground-dark font-extrabold  text-center mb-8">
          <GradientText> কেন আস্থা রাখবেন </GradientText> মুন আইটি-তে?
        </h2>

        <ServicesSection servicesData={servicesData} />
      </Container>
    </div>
  );
};

export default Services;
