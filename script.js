function generateSingleStanza(number) {
  if (
    number === 21 ||
    number === 31 ||
    number === 41 ||
    number === 51 ||
    number === 61 ||
    number === 71 ||
    number === 81 ||
    number === 91
  ) {
    return console.log(`${number} бутылка пива на стене, ${number} бутылка пива!
            Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене!`);
  }
  if (number === 1) {
    return console.log(`${number} бутылка пива на стене, ${number} бутылка пива!
            Возьми одну, пусти по кругу, нет бутылок пива на стене!`);
  }

  if (
    (number > 1) & (number < 5) ||
    (number > 21) & (number < 25) ||
    (number > 31) & (number < 35) ||
    (number > 41) & (number < 45) ||
    (number > 51) & (number < 55) ||
    (number > 61) & (number < 65) ||
    (number > 71) & (number < 75) ||
    (number > 81) & (number < 85) ||
    (number > 91) & (number < 95)
  ) {
    return console.log(`${number} бутылки пива на стене, ${number} бутылки пива!
            Возьми одну, пусти по кругу, ${number - 1} бутылки пива на стене!`);
  }
  if (number < 100) {
    return console.log(`${number} бутылок пива на стене, ${number} бутылок пива!
            Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене`);
  }
}

function generateSongText() {
  for (let i = 99; i > 0; i--) {
    console.log(generateSingleStanza(i));
  }
}
