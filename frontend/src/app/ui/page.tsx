"use client";

import React, { useState } from "react";
import { Container, Section, Stack, Grid } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { ButtonExtended } from "@/components/buttons";
import { TextInput, SearchInput, Switch, Checkbox } from "@/components/forms";
import { Badge, Price, Rating, ProductCard } from "@/components/marketplace";
import { SearchBar, Tags } from "@/components/discovery";
import { StatisticCard } from "@/components/information";
import { Alert, LoadingSpinner } from "@/components/feedback";
import { Divider, Avatar } from "@/components/utilities";
import { Tabs } from "@/components/navigation";

export default function UIComponentsPage() {
  const [activeTab, setActiveTab] = useState("buttons");

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <Container>
        <Stack gap="lg">
          <div>
            <Heading variant="display-m" className="text-primary">Design System</Heading>
            <Text variant="body-l" className="text-muted-foreground mt-2">
              The premium reusable UI component library for Innomine.
            </Text>
          </div>

          <Divider />

          {/* Navigation */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {["buttons", "forms", "marketplace", "typography", "feedback"].map((tab) => (
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
            {activeTab === "buttons" && (
              <Stack gap="md">
                <Heading variant="h3">Buttons</Heading>
                <Grid cols={4} gap="sm">
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
                <Grid cols={2} gap="lg">
                  <Stack gap="sm">
                    <TextInput placeholder="Enter your name" />
                    <SearchInput placeholder="Search innovators..." />
                  </Stack>
                  <Stack gap="sm">
                    <div className="flex items-center gap-2">
                      <Switch id="toggle" /> <label htmlFor="toggle"><Text variant="body-m">Toggle Feature</Text></label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms" label="Accept Terms" />
                    </div>
                  </Stack>
                </Grid>
              </Stack>
            )}

            {activeTab === "marketplace" && (
              <Stack gap="md">
                <Heading variant="h3">Marketplace</Heading>
                <Grid cols={3} gap="md">
                  <ProductCard 
                    id="prod-1"
                    title="NeuroSync Headset"
                    price={299}
                    category="Wearables"
                    imageUrl="https://images.unsplash.com/photo-1550009158-9effb64c7e6b?q=80&w=600&auto=format&fit=crop"
                  />
                  <Stack gap="sm">
                    <Rating rating={4.5} />
                    <Price amount={1499.99} originalAmount={1999.99} />
                    <div className="flex gap-2">
                      <Badge variant="innovation">Innovation</Badge>
                      <Badge variant="verified">Verified</Badge>
                    </div>
                  </Stack>
                </Grid>
              </Stack>
            )}

            {activeTab === "typography" && (
              <Stack gap="md">
                <Heading variant="h3">Typography</Heading>
                <Stack gap="sm" className="p-6 border rounded-xl bg-card">
                  <Heading variant="display-xl">Display XL</Heading>
                  <Heading variant="h1">Heading H1</Heading>
                  <Heading variant="h2">Heading H2</Heading>
                  <Heading variant="h3">Heading H3</Heading>
                  <Text variant="body-l">Body Large - Premium typography scale</Text>
                  <Text variant="body-m">Body Medium - Readable and accessible</Text>
                  <Text variant="caption">Caption text for hints</Text>
                </Stack>
              </Stack>
            )}

            {activeTab === "feedback" && (
              <Stack gap="md">
                <Heading variant="h3">Feedback & Alerts</Heading>
                <Stack gap="sm">
                  <Alert variant="success" title="Success" message="Component deployed successfully." />
                  <Alert variant="warning" title="Warning" message="Disk space is running low." />
                  <Alert variant="error" title="Error" message="Failed to compile module." />
                  <div className="flex items-center gap-4 py-4">
                    <LoadingSpinner size="md" />
                    <Text variant="body-m">Loading assets...</Text>
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
