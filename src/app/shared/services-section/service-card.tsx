"use client";

import Image from "next/image";
import {
  useLgScreen,
  useMdScreenOnly,
  useSmScreenOnly,
  useXsScreenOnly,
} from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import type { ServiceType } from "@/types/service";

type PropsTypes = {
  service: ServiceType;
  index: number;
  dataLength: number;
};

const ServiceCard = ({ service, index, dataLength }: PropsTypes) => {
  const lgScreen = useLgScreen();
  const mdScreenOnly = useMdScreenOnly();
  const smScreenOnly = useSmScreenOnly();
  const xsScreenOnly = useXsScreenOnly();

  return (
    <div
      className={cn(
        "p-5 lg:p-10 text-center border-muted",
        { "lg:border-r": (index + 1) % 3 !== 0 && lgScreen },
        { "md:border-r": index % 2 == 0 && mdScreenOnly },

        { "lg:border-b": dataLength - 3 > index && lgScreen },
        { "border-b": dataLength - 2 > index && mdScreenOnly },
        {
          "border-b": dataLength - 1 > index && (smScreenOnly || xsScreenOnly),
        },
      )}
    >
      <div className="hover:scale-105 transition-all duration-500 flex flex-col items-center gap-1">
        <Image
          className="w-16 h-16 mb-1"
          sizes="100vw"
          width={0}
          height={0}
          src={service.image}
          alt={service.title}
        />
        <h3 className="text-xl font-bold text-foreground-dark">
          {service.title}
        </h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
