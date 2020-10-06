// Math for all currency exchange
let convertCurrency = function (fromCurrency, toCurrency, amount) {
  switch (fromCurrency) {
    case 'usd':
      switch (toCurrency) {
        case 'usd':
          return amount;
        case 'eur':
          return amount * 0.85;
        case 'jpy':
          return amount * 105.67;
        case 'cny':
          return amount * 6.76;
      }
      break;
    case 'eur':
      switch (toCurrency) {
        case 'usd':
          return amount * 1.18;
        case 'eur':
          return amount;
        case 'jpy':
          return amount * 124.58;
        case 'cny':
          return amount * 8.01;
      }
      break;
    case 'jpy':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.009;
        case 'eur':
          return amount * 0.008;
        case 'jpy':
          return amount;
        case 'cny':
          return amount * 0.064;
      }
      break;
    case 'cny':
      switch (toCurrency) {
        case 'usd':
          return amount * 0.15;
        case 'eur':
          return amount * 0.12;
        case 'jpy':
          return amount * 15.56;
        case 'cny':
          return amount;
      }
      break;
  }
};

// Submit button functionality
$('.convert_button').click(() => {
  let currencyFrom = document.getElementById('currency_from').value;
  let currencyTo = document.getElementById('currency_to').value;
  let amountFrom = document.getElementById('amount_from').value;

  let amountTo = convertCurrency(currencyFrom, currencyTo, amountFrom);

  $('.output').text(amountTo);
});

// Make new shake object
let shakeEvent = new Shake({ threshold: 10 });
shakeEvent.start();

// When shake, swap currencies
window.addEventListener('shake', () => {
  let currencyFrom = document.getElementById('currency_from').value;
  let currencyTo = document.getElementById('currency_to').value;

  $('#currency_from').val(currencyTo);
  $('#currency_to').val(currencyFrom);
}, false);

// Stop event
function stopShake() {
  shakeEvent.stop();
}
