import Image from "next/image";

import { FadeIn } from "@/components/fade-in";
import { galleryImages } from "@/lib/data";

export function GallerySection() {
  return (
    <section className="space-y-10">
      <FadeIn className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-emerald-300 sm:text-3xl">Галерея</h2>
        <p className="text-base text-slate-300 sm:text-lg">
          Кадры с маршрутов: холодные вершины, тёплые компании и бесконечные оттенки неба.
        </p>
      </FadeIn>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((src, index) => (
          <FadeIn key={src} delay={index * 40} className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={src}
              alt={`prick_trip кадр ${index + 1}`}
              width={320}
              height={320}
              unoptimized
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
