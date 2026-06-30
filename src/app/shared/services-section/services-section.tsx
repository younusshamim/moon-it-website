import type { ServiceType } from "@/types/service";
import ServiceCard from "./service-card";

const ServicesSection = ({ servicesData }: { servicesData: ServiceType[] }) => {
  return (
    <div className="service-section bg-background2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 shadow-sm rounded-card border border-muted px-3 sm:p-5">
      {servicesData.map((service, index) => {
        return (
          <ServiceCard
            service={service}
            key={index}
            index={index}
            dataLength={servicesData.length}
          />
        );
      })}
    </div>
  );
};

export default ServicesSection;
