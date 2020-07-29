// let times = {a: 10, b: 3, c: 5, d: 15, e: 9 };
let times = [10, 3, 5, 15, 9]
times = times.sort((a, b) => a - b);
process.stdout.write('hello from timer1.js... \rheyyy\n');
for (let time of times) {
  setTimeout(() => 
  process.stdout.write('\x07'), time * 1000);
// }
};

