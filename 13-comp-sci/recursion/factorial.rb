def factorial_iterative(n)
  result = 1
  while n > 1 # end condition
    result *= n # mutation: result = result * n
    n -= 1 # mutation: moving towards the end condition
  end

  result
end

def factorial_recursive(n)
  if n > 1 # Keep going
    n * factorial_recursive(n - 1) # recursion, moving towards the end
  else
    1 # base case
  end
end

require 'pry'
binding.pry
