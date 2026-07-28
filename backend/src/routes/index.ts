import { Router } from 'express';

const router = Router();

import { authRoutes } from '../modules/auth/routes/auth.routes';
import { usersRoutes } from '../modules/users/routes/users.routes';
import { innovationRoutes } from '../modules/innovation/routes/innovation.routes';
import { innovatorsRoutes } from '../modules/innovators/routes/innovators.routes';
import { productsRoutes } from '../modules/products/routes/products.routes';
import { categoriesRoutes } from '../modules/categories/routes/categories.routes';
import { wishlistRoutes } from '../modules/wishlist/routes/wishlist.routes';
import { cartRoutes } from '../modules/cart/routes/cart.routes';
import { ordersRoutes } from '../modules/orders/routes/orders.routes';
import { paymentsRoutes } from '../modules/payments/routes/payments.routes';
import { reviewsRoutes } from '../modules/reviews/routes/reviews.routes';
import { commentsRoutes } from '../modules/comments/routes/comments.routes';
import { feedRoutes } from '../modules/feed/routes/feed.routes';
import { verificationRoutes } from '../modules/verification/routes/verification.routes';
import { notificationsRoutes } from '../modules/notifications/routes/notifications.routes';
import { analyticsRoutes } from '../modules/analytics/routes/analytics.routes';
import { adminRoutes } from '../modules/admin/routes/admin.routes';
import { dashboardRoutes } from '../modules/dashboard/routes/dashboard.routes';
import { searchRoutes } from '../modules/search/routes/search.routes';
import { healthRoutes, versionRoutes } from '../modules/health/routes/health.routes';

// Module Routes
router.use('/health', healthRoutes);
router.use('/version', versionRoutes);
router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/innovations', innovationRoutes);
router.use('/innovation', innovationRoutes);
router.use('/innovators', innovatorsRoutes);
router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/wishlist', wishlistRoutes);
router.use('/bookmarks', wishlistRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', ordersRoutes);
router.use('/payments', paymentsRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/comments', commentsRoutes);
router.use('/feed', feedRoutes);
router.use('/verification', verificationRoutes);
router.use('/notifications', notificationsRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/admin', adminRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/search', searchRoutes);

export const apiRoutes = router;
