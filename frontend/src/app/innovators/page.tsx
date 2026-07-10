import React from 'react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { CreatorCard } from '@/components/marketplace/CreatorCard';
import { innovators } from '@/data/innovators';
import Link from 'next/link';

export default function InnovatorsPage() {
  return (
    <Container className="py-12">
      <div className="mb-12">
        <Heading variant="display-m" className="mb-4">Innovators Directory</Heading>
        <Text variant="body-l">Discover the brilliant minds behind the next generation of products.</Text>
      </div>
      <Grid cols={4} gap="lg">
        {innovators.map((innovator) => (
          <Link key={innovator.id} href={`/innovator/${innovator.id}`} className="block h-full group">
            <CreatorCard
              id={innovator.id}
              name={innovator.name}
              handle={innovator.handle}
              avatarUrl={innovator.avatarUrl}
              bio={innovator.bio}
              followers={innovator.followerCount}
              className="h-full transition-transform group-hover:-translate-y-1"
            />
          </Link>
        ))}
      </Grid>
    </Container>
  );
}
