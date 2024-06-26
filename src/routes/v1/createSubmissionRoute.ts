import express from 'express';

import createSubmission from '../../controllers/createSubmissionController';
import { createSubmissionZodSchema } from '../../dtos/createSubmissionDto';
import { validateCreateSubmissionDto } from '../../validators/createSubmissionValidator';

const problemSubmission=express.Router();

problemSubmission.post('/',validateCreateSubmissionDto(createSubmissionZodSchema),createSubmission);

export default problemSubmission;