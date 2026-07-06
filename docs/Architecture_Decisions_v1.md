ADR-001: Initial Launch Geography

Decision: India-first launch.

Reason:

Faster MVP validation.
Native support for Razorpay.
Simpler taxation and logistics.
Easier regulatory compliance.

Future Plan: Expand to international markets after the platform reaches maturity.

ADR-002: Product Eligibility

A product is eligible if it demonstrates meaningful innovation in at least one of the following:

Engineering
Technology
Artificial Intelligence
Robotics
IoT
Sustainability
Healthcare
Agriculture
Education
Manufacturing
Materials
Renewable Energy
Accessibility
Consumer Utility

The platform is not intended for generic retail products.

ADR-003: Search Strategy

Decision: MongoDB Atlas Search.

Reason:

Fully integrated with MongoDB Atlas.
No Elasticsearch for MVP.
Simpler infrastructure.
Easier maintenance.

Future upgrades may include AI-powered semantic search.

ADR-004: Commission Model

Platform commission shall be configurable through the Admin Panel.

The percentage must never be hardcoded.

The default value for development may be 5%, but administrators should be able to modify it later without changing code.

ADR-005: Order Lifecycle
Pending Payment

↓

Payment Successful

↓

Processing

↓

Packed

↓

Shipped

↓

Out For Delivery

↓

Delivered

Additional states:

Cancelled
Return Requested
Returned
Refund Initiated
Refunded
Failed
ADR-006: Innovation Verification

For MVP:

Manual review by administrators.
Document-based verification.
Verification badge displayed on approved products.

Future versions may include AI-assisted verification, patent validation, and trust scoring.

ADR-007: Icon Library

Primary:

Lucide React

React Icons will not be used unless a required icon is unavailable in Lucide.