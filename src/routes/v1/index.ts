import express from 'express';

import pingcontroller from '../../controllers';


const v1Router=express.Router();

v1Router.get('/ping',pingcontroller);

export default v1Router;