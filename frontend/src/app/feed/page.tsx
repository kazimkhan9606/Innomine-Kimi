"use client";
import Image from "next/image";

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';
import { feedPosts } from '@/data/feed';
import { innovators } from '@/data/innovators';
import { products } from '@/data/products';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import { CreatorAvatar } from '@/components/marketplace/CreatorAvatar';

function FeedPostCard({ post }: { post: { id: string, creatorId: string, productId: string, thumbnailUrl: string, description: string, likes: number, comments: number, shares: number } }) {
  const creator = innovators.find(c => c.id === post.creatorId);
  const product = products.find(p => p.id === post.productId);
  
  // Combine thumbnail and gallery images, remove duplicates if needed
  const allImages = product ? [post.thumbnailUrl, ...(product.galleryImages || [])] : [post.thumbnailUrl];
  const uniqueImages = Array.from(new Set(allImages));
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < uniqueImages.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-[450px] bg-black rounded-3xl overflow-hidden shadow-2xl relative border border-border/20 group">
      <div className="relative aspect-[9/16] w-full">
        
        {/* Progress Bar */}
        {uniqueImages.length > 1 && (
          <div className="absolute top-4 left-0 right-0 z-30 px-4 flex gap-1">
            {uniqueImages.map((_, idx) => (
              <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300" 
                  style={{ width: idx === currentIndex ? '100%' : idx < currentIndex ? '100%' : '0%' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Image */}
        <Image src={uniqueImages[currentIndex]} 
          alt={post.description}
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300 ease-out"
         fill sizes="(max-width: 768px) 100vw, 50vw" />

        {/* Tap areas for navigation */}
        {uniqueImages.length > 1 && (
          <div className="absolute inset-0 z-20 flex">
            <div className="flex-1 cursor-pointer" onClick={handlePrev} />
            <div className="flex-1 cursor-pointer" onClick={handleNext} />
          </div>
        )}

        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 pointer-events-none z-10" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30 pointer-events-none">
          {creator && (
            <Link href={`/innovator/${creator.id}`} className="flex items-center gap-3 mb-4 w-fit hover:opacity-80 transition-opacity pointer-events-auto">
              <CreatorAvatar src={creator.avatarUrl} alt={creator.name} size="md" className="border-2 border-white/20" />
              <div>
                <Text variant="label" className="text-white font-bold mb-0.5">{creator.name}</Text>
                <Text variant="caption" className="text-white/70 font-medium">{creator.handle}</Text>
              </div>
            </Link>
          )}
          <Text variant="body-m" className="text-white/90 leading-relaxed font-medium mb-4 pr-16 drop-shadow-md">
            {post.description}
          </Text>
          
          {post.productId && (
            <Link href={`/product/${post.productId}`} className="inline-block pointer-events-auto">
              <div className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-2">
                View Product
              </div>
            </Link>
          )}
        </div>
        
        {/* Actions sidebar */}
        <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-30 pointer-events-auto">
          <div className="flex flex-col items-center gap-1.5 group/btn cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover/btn:scale-110 border border-white/10 hover:bg-black/60">
              <Heart className="h-6 w-6" fill="transparent" />
            </div>
            <span className="text-white text-xs font-bold drop-shadow-md">{post.likes >= 1000 ? `${(post.likes/1000).toFixed(1)}k` : post.likes}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group/btn cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover/btn:scale-110 border border-white/10 hover:bg-black/60">
              <MessageCircle className="h-6 w-6" />
            </div>
            <span className="text-white text-xs font-bold drop-shadow-md">{post.comments}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 group/btn cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover/btn:scale-110 border border-white/10 hover:bg-black/60">
              <Share2 className="h-6 w-6" />
            </div>
            <span className="text-white text-xs font-bold drop-shadow-md">{post.shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeedPage() {
  return (
    <Container className="py-12 bg-background min-h-screen">
      <div className="text-center mb-10">
        <Heading variant="display-m" className="mb-4">Innovation Feed</Heading>
        <Text variant="body-l" className="max-w-2xl mx-auto">Discover the latest creations and behind-the-scenes building process from top innovators.</Text>
      </div>
      
      <div className="flex flex-col items-center gap-10">
        {feedPosts.map((post) => (
          <FeedPostCard key={post.id} post={post} />
        ))}
      </div>
    </Container>
  );
}


