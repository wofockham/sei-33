$(document).ready(function () {
  $('#checking-deposit').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#checking-balance').text('$' + newBalance);
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
  });

  $('#savings-deposit').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);
    const newBalance = currentBalance + deposit;
    $('#savings-balance').text('$' + newBalance);
  });

  $('#savings-withdraw').on('click', function () {
    const deposit = + $('#savings-amount').val();
    const currentBalance = + $('#savings-balance').text().slice(1);
    const newBalance = currentBalance - deposit;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    }

  });

});
