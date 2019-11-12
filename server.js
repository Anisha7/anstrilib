require('./umd/anstrilib');

(function test() {
  console.log(`${'hello'.capitalize()} should be Hello`);
  console.log(`${'hello'.allCaps()} should be HELLO`);
  console.log(`${'hello world'.capitalizeWords()} should be Hello World`);
} ());
