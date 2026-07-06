import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/mock";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShieldCheck } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card border-border flex flex-col rounded-2xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={product.thumbnailUrl}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isFeatured && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
            {product.isTrending && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground border-none">
                Trending
              </Badge>
            )}
          </div>
        </div>

        <CardContent className="flex-1 p-5">
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
            <span>{product.category}</span>
          </div>
          <h3 className="text-lg font-bold leading-tight mb-2 line-clamp-2 text-foreground group-hover:text-accent transition-colors">
            {product.title}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="relative h-6 w-6 rounded-full overflow-hidden bg-muted">
              <Image src={product.innovator.avatarUrl} alt={product.innovator.name} fill className="object-cover" />
            </div>
            <span className="text-sm text-muted-foreground truncate">{product.innovator.name}</span>
            {product.innovator.isVerified && (
              <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0" />
            )}
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 flex items-end justify-between mt-auto">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviewsCount})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
