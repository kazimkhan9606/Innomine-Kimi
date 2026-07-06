export const USER_ROLES = {
  GUEST: 'GUEST',
  BUYER: 'BUYER',
  INNOVATOR: 'INNOVATOR',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
} as const;

export const ORDER_STATUS = {
  PENDING_PAYMENT: 'PENDING_PAYMENT',
  PAYMENT_SUCCESSFUL: 'PAYMENT_SUCCESSFUL',
  PROCESSING: 'PROCESSING',
  PACKED: 'PACKED',
  SHIPPED: 'SHIPPED',
  OUT_FOR_DELIVERY: 'OUT_FOR_DELIVERY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  RETURN_REQUESTED: 'RETURN_REQUESTED',
  RETURNED: 'RETURNED',
  REFUND_INITIATED: 'REFUND_INITIATED',
  REFUNDED: 'REFUNDED',
  FAILED: 'FAILED',
} as const;

export const PRODUCT_CATEGORIES = [
  'Engineering',
  'Technology',
  'AI',
  'Robotics',
  'IoT',
  'Sustainability',
  'Healthcare',
  'Agriculture',
  'Education',
  'Manufacturing',
  'Materials',
  'Renewable Energy',
  'Accessibility',
  'Consumer Utility'
] as const;
