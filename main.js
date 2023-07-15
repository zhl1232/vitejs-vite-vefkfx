import './style.css';

document.querySelector('#app').innerHTML = `
  <button id="test">testClick</button>
`;
function test() {
  const a = 1;
  if (_.isNumber(a)) {
    console.log(a);
  }
}
document.querySelector('#test').addEventListener('click', test);
