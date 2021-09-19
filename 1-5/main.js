function createJuice(fruits) {
  console.log(`${fruits}を受け取りました。ジュースにして返します`);
  let juice = fruits + 'ジュース';
  return juice;
}

let orangeJuice = createJuice('みかん');
console.log(`${orangeJuice}が届きました`);