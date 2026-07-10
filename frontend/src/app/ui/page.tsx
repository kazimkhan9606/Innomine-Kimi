"use client";

import React, { useState } from "react";
import { Container, Section, Stack, Grid } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { ButtonExtended } from "@/components/buttons";
import { TextInput, SearchInput, Switch, Checkbox } from "@/components/forms";
import { Badge, Price, Rating, ProductCard } from "@/components/marketplace";
import { Alert, LoadingSpinner } from "@/components/feedback";
import { Divider } from "@/components/utilities";

export default function UIComponentsPage() {
  const [activeTab, setActiveTab] = useState("typography");

  return (
    <div className="min-h-screen bg-background text-text-primary py-12">
      <Container>
        <Stack gap="lg">
          <div>
            <Heading variant="display-m" className="text-primary">Design System Showcase</Heading>
            <Text variant="body-l" className="text-text-muted mt-2">
              The internal documentation and validation page for Innomine&apos;s premium UI components.
            </Text>
          </div>

          <Divider />

          {/* Navigation */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {["typography", "colors", "buttons", "forms", "marketplace", "feedback"].map((tab) => (
              <ButtonExtended 
                key={tab}
                variant={activeTab === tab ? "primary" : "outline"}
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab}
              </ButtonExtended>
            ))}
          </div>

          <Section spacing="sm">
            
            {activeTab === "typography" && (
              <Stack gap="lg">
                <Heading variant="h3">Typography Scale</Heading>
                <Grid cols={1} gap="md" className="p-8 border border-border rounded-xl bg-card shadow-surface">
                  <div className="border-b border-divider pb-4 mb-4">
                    <Heading variant="display-xl">Display XL - Premium Headlines</Heading>
                    <Text variant="caption" className="text-text-muted mt-1">Font Size: 4.5rem | Weight: 700 | Usage: Hero sections only</Text>
                  </div>
                  <div className="border-b border-divider pb-4 mb-4">
                    <Heading variant="display-l">Display L - Section Headers</Heading>
                    <Text variant="caption" className="text-text-muted mt-1">Font Size: 3.75rem | Weight: 700 | Usage: Major sections</Text>
                  </div>
                  <div className="border-b border-divider pb-4 mb-4">
                    <Heading variant="h1">Heading H1 - Page Titles</Heading>
                    <Text variant="caption" className="text-text-muted mt-1">Font Size: 3rem | Weight: 700 | Usage: Top-level page titles</Text>
                  </div>
                  <div className="border-b border-divider pb-4 mb-4">
                    <Heading variant="h2">Heading H2 - Subsections</Heading>
                    <Text variant="caption" className="text-text-muted mt-1">Font Size: 2.25rem | Weight: 600 | Usage: Content blocks</Text>
                  </div>
                  <div className="border-b border-divider pb-4 mb-4">
                    <Heading variant="h3">Heading H3 - Card Titles</Heading>
                    <Text variant="caption" className="text-text-muted mt-1">Font Size: 1.5rem | Weight: 600 | Usage: Component titles</Text>
                  </div>
                  <div className="border-b border-divider pb-4 mb-4">
                    <Text variant="body-l">Body Large - Introductory text that requires higher legibility.</Text>
                    <Text variant="caption" className="text-text-muted mt-1">Font Size: 1.125rem | Weight: 400 | Usage: Lead paragraphs</Text>
                  </div>
                  <div className="border-b border-divider pb-4 mb-4">
                    <Text variant="body-m">Body Medium - Standard paragraph text used across the application.</Text>
                    <Text variant="caption" className="text-text-muted mt-1">Font Size: 1rem | Weight: 400 | Usage: Default reading text</Text>
                  </div>
                  <div>
                    <Text variant="caption">Caption - Small text for hints, timestamps, or disclaimers.</Text>
                    <Text variant="caption" className="text-text-muted mt-1 block">Font Size: 0.875rem | Weight: 400 | Usage: UI metadata</Text>
                  </div>
                </Grid>
              </Stack>
            )}

            {activeTab === "colors" && (
              <Stack gap="lg">
                <Heading variant="h3">Semantic Tokens</Heading>
                
                <Stack gap="sm">
                  <Heading variant="h4">Brand & States</Heading>
                  <Grid cols={5} gap="sm" className="grid-cols-2 md:grid-cols-5">
                    <div className="h-24 rounded-lg bg-primary text-primary-foreground flex flex-col items-center justify-center font-medium shadow-surface">Primary</div>
                    <div className="h-24 rounded-lg bg-secondary text-secondary-foreground flex flex-col items-center justify-center font-medium shadow-surface">Secondary</div>
                    <div className="h-24 rounded-lg bg-accent text-accent-foreground flex flex-col items-center justify-center font-medium shadow-surface">Accent</div>
                    <div className="h-24 rounded-lg bg-success text-success-foreground flex flex-col items-center justify-center font-medium shadow-surface">Success</div>
                    <div className="h-24 rounded-lg bg-danger text-danger-foreground flex flex-col items-center justify-center font-medium shadow-surface">Danger</div>
                  </Grid>
                </Stack>

                <Stack gap="sm">
                  <Heading variant="h4">Surfaces</Heading>
                  <Grid cols={3} gap="sm" className="grid-cols-1 md:grid-cols-3">
                    <div className="h-32 rounded-lg bg-background border border-border flex flex-col items-center justify-center text-text-primary shadow-surface">
                      <Text variant="body-m" className="font-semibold">Background</Text>
                      <Text variant="caption" className="text-text-muted">bg-background</Text>
                    </div>
                    <div className="h-32 rounded-lg bg-surface border border-border flex flex-col items-center justify-center text-text-primary shadow-raised">
                      <Text variant="body-m" className="font-semibold">Surface (Raised)</Text>
                      <Text variant="caption" className="text-text-muted">bg-surface / shadow-raised</Text>
                    </div>
                    <div className="h-32 rounded-lg bg-card border border-border flex flex-col items-center justify-center text-text-primary shadow-floating">
                      <Text variant="body-m" className="font-semibold">Card (Floating)</Text>
                      <Text variant="caption" className="text-text-muted">bg-card / shadow-floating</Text>
                    </div>
                  </Grid>
                </Stack>
              </Stack>
            )}

            {activeTab === "buttons" && (
              <Stack gap="md">
                <Heading variant="h3">Buttons</Heading>
                <Grid cols={4} gap="md" className="grid-cols-2 md:grid-cols-4">
                  <ButtonExtended variant="primary">Primary</ButtonExtended>
                  <ButtonExtended variant="secondary">Secondary</ButtonExtended>
                  <ButtonExtended variant="outline">Outline</ButtonExtended>
                  <ButtonExtended variant="ghost">Ghost</ButtonExtended>
                  <ButtonExtended variant="danger">Danger</ButtonExtended>
                  <ButtonExtended variant="success">Success</ButtonExtended>
                  <ButtonExtended isLoading>Loading</ButtonExtended>
                  <ButtonExtended variant="link">Link Button</ButtonExtended>
                </Grid>
              </Stack>
            )}

            {activeTab === "forms" && (
              <Stack gap="md">
                <Heading variant="h3">Forms</Heading>
                <Grid cols={2} gap="lg" className="grid-cols-1 lg:grid-cols-2">
                  <Stack gap="md" className="p-6 bg-surface border border-border rounded-xl shadow-surface">
                    <Heading variant="h4">Inputs</Heading>
                    <TextInput placeholder="Enter your full name" />
                    <SearchInput placeholder="Search innovators or products..." />
                    <TextInput placeholder="Error state" className="border-danger focus-visible:ring-danger text-danger" />
                  </Stack>
                  <Stack gap="md" className="p-6 bg-surface border border-border rounded-xl shadow-surface">
                    <Heading variant="h4">Controls</Heading>
                    <div className="flex items-center justify-between p-4 bg-background border border-border rounded-lg">
                      <div>
                        <Text variant="body-m" className="font-semibold text-text-primary">Enable Notifications</Text>
                        <Text variant="caption" className="text-text-muted">Receive email updates about new innovations.</Text>
                      </div>
                      <Switch id="toggle" /> 
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg">
                      <Checkbox id="terms" label="Accept terms and conditions" />
                    </div>
                  </Stack>
                </Grid>
              </Stack>
            )}

            {activeTab === "marketplace" && (
              <Stack gap="lg">
                <Heading variant="h3">Marketplace Components</Heading>
                <Grid cols={3} gap="lg" className="grid-cols-1 md:grid-cols-3">
                  <ProductCard 
                    id="prod-1"
                    title="NeuroSync Headset"
                    price={299}
                    category="Wearables"
                    imageUrl="https://images.unsplash.com/photo-1550009158-9effb64c7e6b?q=80&w=600&auto=format&fit=crop"
                  />
                  <Stack gap="md" className="p-6 bg-surface border border-border rounded-xl">
                    <Heading variant="h4">Price Displays</Heading>
                    <Price amount={299.00} />
                    <Price amount={1499.99} originalAmount={1999.99} size="lg" />
                    
                    <Divider />
                    
                    <Heading variant="h4">Ratings</Heading>
                    <Rating rating={4.8} />
                    <Rating rating={2.5} />
                    
                    <Divider />
                    
                    <Heading variant="h4">Badges</Heading>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="innovation">Innovation</Badge>
                      <Badge variant="verified">Verified</Badge>
                      <Badge variant="category">Tech</Badge>
                      <Badge variant="discount">-20%</Badge>
                    </div>
                  </Stack>
                </Grid>
              </Stack>
            )}

            {activeTab === "feedback" && (
              <Stack gap="md">
                <Heading variant="h3">Feedback & Alerts</Heading>
                <Stack gap="md" className="max-w-2xl">
                  <Alert variant="info" title="Information" message="There is a new update available for your account." />
                  <Alert variant="success" title="Success" message="Your hardware product was listed successfully." />
                  <Alert variant="warning" title="Action Required" message="Please complete your creator profile to receive payments." />
                  <Alert variant="error" title="Payment Failed" message="Your card was declined. Please try a different payment method." />
                  
                  <div className="flex items-center gap-4 py-8 px-4 bg-surface border border-border rounded-xl justify-center mt-4 shadow-surface">
                    <LoadingSpinner size="lg" />
                    <Text variant="body-m" className="text-text-secondary animate-pulse">Processing transaction...</Text>
                  </div>
                </Stack>
              </Stack>
            )}
          </Section>

        </Stack>
      </Container>
    </div>
  );
}
