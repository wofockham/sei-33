const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = + $('#checking-balance').text().slice(1);
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }

  const savingsBalance = + $('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }

};

$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#checking-balance').text('$' + newBalance);

    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const otherBalance = + $('#savings-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - deposit;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (deposit <= totalBalance) {
      $('#checking-balance').text('$0');
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }

    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#savings-balance').text('$' + newBalance);

    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);

    const otherBalance = + $('#checking-balance').text().slice(1);
    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - deposit;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    } else if (deposit <= totalBalance) {
      $('#savings-balance').text('$0');
      $('#checking-balance').text('$' + (otherBalance + newBalance));
    }

    checkForZero();
  });

});
