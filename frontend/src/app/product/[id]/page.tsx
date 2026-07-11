import Image from "next/image";
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { ProductGallery } from '@/components/marketplace/ProductGallery';
import { ButtonExtended } from '@/components/buttons/ButtonExtended';
import { Rating } from '@/components/marketplace/Rating';
import { Price } from '@/components/marketplace/Price';
import { innovators } from '@/data/innovators';
import { products } from '@/data/products';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  
  const product = products.find(p => p.id === id);
  if (!product) return notFound();

  const creator = innovators.find(c => c.id === product.creatorId);
  const avgRating = product.reviews.length ? product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length : 0;

  return (
    <Container className="py-12">
      <Grid cols={2} gap="lg" className="mb-16">
        <div>
          <ProductGallery images={product.galleryImages} alt={product.title} />
        </div>
        <div className="flex flex-col gap-8 py-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                Innovation
              </span>
            </div>
            <Heading variant="display-m" className="mb-4">{product.title}</Heading>
            
            {creator && (
              <div className="flex items-center gap-2 mb-6">
                <Text variant="body-m" className="text-text-muted">Created by</Text>
                <Link href={`/innovator/${creator.id}`} className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity font-medium">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
                    <Image src={creator.avatarUrl} alt={creator.name} className="object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  {creator.name}
                </Link>
              </div>
            )}
            
            <div className="flex items-center gap-4 mb-6">
              {product.reviews.length > 0 && (
                <Rating rating={avgRating} reviews={product.reviews.length} />
              )}
            </div>
            
            <Price amount={product.price} size="lg" className="text-4xl font-bold" />
          </div>

          <Text variant="body-l" className="leading-relaxed text-text-secondary">
            {product.description}
          </Text>

          <div className="bg-surface/50 p-6 rounded-2xl border border-border">
            <Heading variant="h4" className="mb-4 text-text-primary">Specifications</Heading>
            <div className="flex flex-col gap-3">
              {product.specifications.map((spec, i) => (
                <div key={i} className="flex justify-between items-center border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <Text variant="body-m" className="font-medium text-text-secondary">{spec.name}</Text>
                  <Text variant="body-m" className="text-text-primary font-medium">{spec.value}</Text>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <ButtonExtended variant="primary" size="lg" className="w-full text-lg h-14" leftIcon={<ShoppingCart className="w-5 h-5" />}>
              Add to Cart
            </ButtonExtended>
          </div>
        </div>
      </Grid>
      
      {product.reviews.length > 0 && (
        <div className="pt-12 border-t border-border">
          <Heading variant="h3" className="mb-8">Customer Reviews ({product.reviews.length})</Heading>
          <Grid cols={2} gap="lg">
            {product.reviews.map(review => (
              <div key={review.id} className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Text variant="label" className="text-text-primary mb-1">{review.userName}</Text>
                    <Text variant="caption" className="text-text-muted">
                      {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </Text>
                  </div>
                  <Rating rating={review.rating} />
                </div>
                <Text variant="body-m" className="text-text-secondary leading-relaxed">{review.comment}</Text>
              </div>
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
}
