# Linear time complexity: O(N)
def fibonacci_iterative(n)
  a = 1
  b = 1
  while n > 2 # Base case
    # parallel assignment
    a, b = b, a + b # atomic
    n -= 1 # Mutation: move towards the base case
  end

  b # nth Fibonacci number
end

def fibonacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

# TODO: Implement this in a faster way.

require 'pry'
binding.pry
