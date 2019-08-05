class Bank
  attr_reader :name, :accounts

  def initialize(n)
    @name = n
    @accounts = Hash.new 0 # Alternatively {}
  end

  def create_account(account_name, starting_balance)
    @accounts[account_name] = starting_balance
  end

  def deposit(account_name, amount)
    @accounts[account_name] += amount
  end

  def withdraw(account_name, amount)
    @accounts[account_name] -= amount if (amount <= @accounts[account_name])
  end

  def balance(account_name)
    @accounts[account_name]
  end
end
