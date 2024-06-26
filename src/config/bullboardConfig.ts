import { createBullBoard } from '@bull-board/api';
import {BullAdapter} from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';

import sampleQueue from '../queues/sampleQueue';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');


createBullBoard({
  queues: [new BullAdapter(sampleQueue)],
  serverAdapter: serverAdapter,
});

export default serverAdapter;