const spinner = '|/-\\|/-\\\n';
let holdTime = 100;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, holdTime);
  holdTime += 100;
}



// const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
// let time = 100;
// for(let i = 0; i < 2; i++) {
//   for (let pos of spin) {
//     time += 200;
//     setTimeout(() => {
//       process.stdout.write(pos);
//     }, time)
//   }
// }
// setTimeout(() => {
//   process.stdout.write('\r|   ');
//   console.log();
// }, 1900)

// const spinner = () => {
//   setTimeout(()=>{
//     process.stdout.write('\r|   ')
//   }, 100)
//   setTimeout(()=>{
//     process.stdout.write("\r/   ")
//   }, 300)
//   setTimeout(()=>{
//     process.stdout.write("\r-   ")
//   }, 500)
//   setTimeout(()=>{
//     process.stdout.write("\r\\   ")
//   }, 700)
//   setTimeout(()=>{
//     process.stdout.write('\r|   ')
//   }, 900)
//   setTimeout(()=>{
//     process.stdout.write("\r/   ")
//   }, 1100)
//   setTimeout(()=>{
//     process.stdout.write("\r-   ")
//   }, 1300)
//   setTimeout(()=>{
//     process.stdout.write("\r\\   ")
//   }, 1500)
//   setTimeout(()=>{
//     process.stdout.write("\r|   ")
//   }, 1700)
//   setTimeout(() => {
//     process.stdout.write("\n");
//   }, 1900);
// }
  

//   spinner()