import 'babel-polyfill';
import {handler} from './../src/index.js';

const testEvent = {

};

describe('general function test', () => {
  it('should give response', (done) => {
    handler(testEvent, {
      succeed: (res) => {
        console.log('result');
        console.log(res);
        done();
      },
      fail: (err) => {
        console.log('error');
        console.log(err);
        done();
      }
    });
  });
});

