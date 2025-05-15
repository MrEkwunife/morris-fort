import { Card, CardContent } from "./card";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

interface Services {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ service }: { service: Services }) {
  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-md h-full">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image || "/api/placeholder/800/450"}
          alt={service.title}
          fill
          className="object-cover"
        />
        <CircleCheck />
      </div>
      <CardContent className="bg-white p-6">
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p>{service.description}</p>
      </CardContent>
    </Card>
  );
}
