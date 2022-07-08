import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

// CONTROLLEURS
import { homeController } from './controllers/homeController';
// MIDDLEWARES

const router = express();

router.use(helmet());
router.use(cors());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/', homeController)



export default router;