import axios from 'axios';
import './common';

describe('app', () => {
  describe('GET /', () => {
    it('responses with hello world', async () => {
      const res = await axios.get('/');
      expect(res.data).toEqual('hello world');
    });
  });
});
