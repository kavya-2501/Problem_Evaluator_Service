import express from 'express';

import pingcontroller from '../../controllers';
import problemSubmission from './createSubmissionRoute';


const v1Router=express.Router();

v1Router.get('/ping',pingcontroller);

v1Router.use('/submissions',problemSubmission);

export default v1Router;