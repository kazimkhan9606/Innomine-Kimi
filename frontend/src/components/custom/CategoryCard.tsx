import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types/mock";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/category/${category.slug}`} className="group block">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-muted border border-border">
        <Image
          src={category.imageUrl}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
          <p className="text-sm text-gray-300 font-medium">{category.productCount} innovations</p>
        </div>
      </div>
    </Link>
  );
}
