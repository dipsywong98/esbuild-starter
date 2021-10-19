import stoppable from 'stoppable';
import { Server } from 'http';
import axios from 'axios';
import app from '../../src/app';

let server: Server & stoppable.WithStop;
const port = 12345;

axios.defaults.baseURL = `http://localhost:${port}`;

beforeAll(() => {
  server = stoppable(app.listen(port), 0);
});

afterAll(() => {
  server?.stop();
});
