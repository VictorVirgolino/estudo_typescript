import {Request, Response, Router} from 'express';
import { appController } from '../controllers/appController';

const router : Router = Router();

router.get('/', appController.home)

export {router}