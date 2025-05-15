"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import ServiceCard from "./ui/serviceCard";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Solar Maintenance",
    description:
      "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    image: "/image-about1.jpeg",
  },
  {
    id: 2,
    title: "Energy Saving Devices",
    description:
      "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    image: "/image-about1.jpeg",
  },
  {
    id: 3,
    title: "Solar Solutions",
    description:
      "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    image: "/image-about1.jpeg",
  },

  {
    id: 4,
    title: "Solar Solutions",
    description:
      "Aenean mattis mauris turpis, quis porta magna aliquam eu. Nulla consectetur.",
    image: "/image-about1.jpeg",
  },
];

import type { CarouselApi } from "@/components/ui/carousel";

export default function ServicesCarousel(): React.JSX.Element {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  // Handle carousel navigation
  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <ServiceCard service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
        <CarouselNext className="absolute right-0 translate-x-1/2" />
      </Carousel>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-1.5">
        {services.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              current === index ? "bg-green-500" : "bg-gray-300"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
