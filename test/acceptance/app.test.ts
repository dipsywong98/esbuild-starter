import axios from 'axios';
import './common';

describe('app', () => {
  describe('GET /api/ping', () => {
    it('responses with hello world', async () => {
      const res = await axios.get('/api/ping');
      expect(res.data).toEqual('hello world');
    });
  });
});
