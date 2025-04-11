import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 50 },   // ramp up to 50 users
    { duration: '30s', target: 50 },   // stay at 50 users
    { duration: '10s', target: 0 },    // ramp down
  ],
};

export default function () {
  http.get('https://snapcircle.vercel.app');
  sleep(1);
}
