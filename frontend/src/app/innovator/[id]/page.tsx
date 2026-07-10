import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { ProductCard } from '@/components/marketplace/ProductCard';
import { CreatorAvatar } from '@/components/marketplace/CreatorAvatar';
import { innovators } from '@/data/innovators';
import { products } from '@/data/products';
import Link from 'next/link';

export default async function InnovatorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  
  const innovator = innovators.find(i => i.id === id);
  if (!innovator) return notFound();

  const innovatorProducts = products.filter(p => p.creatorId === id);

  return (
    <Container className="py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 bg-card p-8 rounded-3xl border border-border shadow-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
        <CreatorAvatar src={innovator.avatarUrl} alt={innovator.name} size="lg" className="h-40 w-40 border-4 border-card shadow-lg z-10" />
        <div className="flex-1 z-10">
          <Heading variant="display-m" className="mb-2">{innovator.name}</Heading>
          <Text variant="body-l" className="mb-4 text-primary font-medium">{innovator.handle}</Text>
          <Text variant="body-l" className="mb-6 max-w-2xl text-text-secondary leading-relaxed">{innovator.bio}</Text>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <Text variant="label" className="text-text-muted mb-1">Followers</Text>
              <Heading variant="h3" className="font-bold text-text-primary">{innovator.followerCount.toLocaleString()}</Heading>
            </div>
            <div className="flex flex-col">
              <Text variant="label" className="text-text-muted mb-1">Projects</Text>
              <Heading variant="h3" className="font-bold text-text-primary">{innovator.projectCount}</Heading>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <Heading variant="h2">Innovations by {innovator.name}</Heading>
      </div>
      
      {innovatorProducts.length > 0 ? (
        <Grid cols={3} gap="lg">
          {innovatorProducts.map(product => {
            const avgRating = product.reviews.length ? product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length : undefined;
            return (
              <Link key={product.id} href={`/product/${product.id}`} className="block h-full group">
                <ProductCard
                  id={product.id}
                  title={product.title}
                  imageUrl={product.thumbnailUrl}
                  price={product.price}
                  category="Innovation"
                  rating={avgRating}
                  reviews={product.reviews.length}
                  isInnovation={true}
                  className="h-full transition-transform group-hover:-translate-y-1"
                />
              </Link>
            );
          })}
        </Grid>
      ) : (
        <div className="text-center py-12 bg-surface rounded-2xl border border-dashed border-border">
          <Text variant="body-l" className="text-text-muted">No innovations found for this creator yet.</Text>
        </div>
      )}
    </Container>
  );
}
