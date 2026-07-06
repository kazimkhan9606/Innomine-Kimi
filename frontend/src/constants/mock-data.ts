import { Category, Faq, NavMenuItem, Product, Statistic, Testimonial } from '@/types/mock';

export const MOCK_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'Technology', slug: 'technology', description: 'Cutting-edge tech gadgets.', imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80', productCount: 142 },
  { id: 'cat-2', name: 'AI & Robotics', slug: 'ai-robotics', description: 'Intelligent machines and AI tools.', imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80', productCount: 84 },
  { id: 'cat-3', name: 'Sustainability', slug: 'sustainability', description: 'Eco-friendly and sustainable innovations.', imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80', productCount: 215 },
  { id: 'cat-4', name: 'Healthcare', slug: 'healthcare', description: 'Medical and wellness devices.', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80', productCount: 56 },
  { id: 'cat-5', name: 'IoT & Smart Home', slug: 'iot', description: 'Connected devices for modern living.', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80', productCount: 302 },
  { id: 'cat-6', name: 'Education', slug: 'education', description: 'Tools for learning and development.', imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80', productCount: 93 },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Aura Smart Sleep Mask',
    slug: 'aura-smart-sleep-mask',
    description: 'The world\'s most advanced sleep mask featuring biometric tracking, smart dimming, and personalized wake-up sequences designed to optimize your circadian rhythm.',
    price: 199,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80',
    innovator: { id: 'inv-1', name: 'Dr. Sarah Chen', handle: '@sarahchen', avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80', isVerified: true },
    category: 'Healthcare',
    tags: ['Sleep', 'Wearables', 'Health'],
    rating: 4.8,
    reviewsCount: 342,
    isAvailable: true,
    isTrending: true,
    isFeatured: true,
    createdAt: '2025-09-01T00:00:00Z',
  },
  {
    id: 'prod-2',
    title: 'Nexus Modular Keyboard',
    slug: 'nexus-modular-keyboard',
    description: 'A fully modular, hot-swappable mechanical keyboard with magnetic attachment points, OLED display modules, and open-source firmware.',
    price: 249,
    originalPrice: 299,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80',
    innovator: { id: 'inv-2', name: 'Nexus Hardware', handle: '@nexushw', avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80', isVerified: true },
    category: 'Technology',
    tags: ['Keyboards', 'Productivity', 'Open Source'],
    rating: 4.9,
    reviewsCount: 89,
    isAvailable: true,
    isTrending: true,
    createdAt: '2025-10-15T00:00:00Z',
  },
  {
    id: 'prod-3',
    title: 'EcoPurify Water Bottle',
    slug: 'ecopurify-water-bottle',
    description: 'Self-cleaning water bottle with built-in UV-C water purification technology. Eliminates 99.9% of bio-contaminants in 60 seconds.',
    price: 89,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80',
    innovator: { id: 'inv-3', name: 'EcoTech Solutions', handle: '@ecotech', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80', isVerified: false },
    category: 'Sustainability',
    tags: ['Hydration', 'Outdoors', 'Tech'],
    rating: 4.6,
    reviewsCount: 156,
    isAvailable: true,
    isFeatured: true,
    createdAt: '2025-11-20T00:00:00Z',
  },
  {
    id: 'prod-4',
    title: 'Orbital Drone Camera',
    slug: 'orbital-drone-camera',
    description: 'Autonomous follow-me drone camera that predicts subject movement and avoids obstacles using next-generation neural processing.',
    price: 699,
    currency: 'USD',
    images: ['https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80',
    innovator: { id: 'inv-4', name: 'AeroDynamics', handle: '@aerodynamics', avatarUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80', isVerified: true },
    category: 'Technology',
    tags: ['Drones', 'Photography', 'AI'],
    rating: 4.7,
    reviewsCount: 42,
    isAvailable: true,
    isTrending: false,
    createdAt: '2026-01-05T00:00:00Z',
  },
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Innomine is exactly what hardware startups have been waiting for. We launched our smart ring here and sold out our first batch in three days.",
    authorName: 'Elena Rostova',
    authorRole: 'Hardware Engineer',
    company: 'Vital Ring',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
  },
  {
    id: 'test-2',
    quote: "As an early adopter, finding truly innovative products used to require scouring obscure forums. Now, Innomine is my daily feed of the future.",
    authorName: 'Marcus Johnson',
    authorRole: 'Tech Reviewer',
    company: 'Future Tech',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    id: 'test-3',
    quote: "The verification system builds incredible trust. I bought a 3D printer from a new startup here, knowing they were thoroughly vetted.",
    authorName: 'Sophie Lin',
    authorRole: 'Industrial Designer',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
  },
];

export const MOCK_STATS: Statistic[] = [
  { id: 'stat-1', label: 'Verified Innovators', value: 12500, suffix: '+' },
  { id: 'stat-2', label: 'Innovations Launched', value: 34000, suffix: '+' },
  { id: 'stat-3', label: 'Community Members', value: 2.5, suffix: 'M' },
  { id: 'stat-4', label: 'Total Funding Raised', value: 150, prefix: '$', suffix: 'M+' },
];

export const MOCK_FAQS: Faq[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Innomine?',
    answer: 'Innomine is the world\'s premium marketplace dedicated exclusively to innovative physical products, connecting creators, engineers, and startups directly with early adopters and tech enthusiasts.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'How are products vetted on Innomine?',
    answer: 'Products undergo our Innovation Verification System, where our team reviews patents, prototypes, manufacturing readiness, and creator identity to ensure authenticity and quality.'
  },
  {
    id: 'faq-3',
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer: 'Shipping policies vary by innovator. Many of our verified creators offer worldwide shipping, but you can check the specific shipping options on each product page.'
  },
  {
    id: 'faq-4',
    category: 'Innovators',
    question: 'How do I sell my product on Innomine?',
    answer: 'You can apply to become an innovator through our "Become an Innovator" page. We review applications within 3-5 business days to ensure your product meets our innovation criteria.'
  },
];

export const MOCK_NAV: NavMenuItem[] = [
  { label: 'Explore', href: '/explore' },
  { 
    label: 'Categories', 
    href: '/categories',
    children: MOCK_CATEGORIES.map(c => ({ label: c.name, href: `/category/${c.slug}`, description: c.description }))
  },
  { label: 'Innovation Feed', href: '/feed' },
  { label: 'Innovators', href: '/innovators' },
  { label: 'About', href: '/about' },
];
