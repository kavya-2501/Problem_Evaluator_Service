import express from 'express';

import createSubmission from '../../controllers/createSubmissionController';
import { validateCreateSubmissionDto } from '../../validators/createSubmissionValidator';

const problemSubmission=express.Router();

problemSubmission.post('/',validateCreateSubmissionDto,createSubmission);

export default problemSubmission;