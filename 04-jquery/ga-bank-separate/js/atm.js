// This code knows nothing of overdraft protection.
// It simply connects DOM elements to logical functions defined elsewhere using event handlers.

// Our very handy render() function updates every part of the DOM with the current balances.
// We call it anytime something in our accounts data might have changed.
const render = function () {
  $('#checking-balance').text('$' + accounts.checkingBalance);
  $('#savings-balance').text('$' + accounts.savingsBalance);

  $('.zero').removeClass('zero');

  if (accounts.checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  if (accounts.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};

$(document).ready(function () {
  render();

  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val();
    accounts.checkingDeposit(amount);
    render();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = $('#checking-amount').val();
    accounts.checkingWithdraw(amount);
    render();
  });

  $('#savings-deposit').on('click', function () {
    const amount = $('#savings-amount').val();
    accounts.savingsDeposit(amount);
    render();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = $('#savings-amount').val();
    accounts.savingsWithdraw(amount);
    render();
  });
});
