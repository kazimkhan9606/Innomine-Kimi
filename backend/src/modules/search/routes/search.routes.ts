import { Router } from 'express';
import { SearchController } from '../controller/search.controller';
import { validate } from '../../../shared/middlewares/validate';
import { searchQuerySchema } from '../validation/search.validation';

const router = Router();
const searchController = new SearchController();

// GET /api/v1/search/metadata - Retrieve available filter metadata (categories, price range, etc.)
router.get('/metadata', searchController.getFilterMetadata);

// GET /api/v1/search - Search and filter innovations
router.get('/', validate(searchQuerySchema), searchController.searchInnovations);

export const searchRoutes = router;
