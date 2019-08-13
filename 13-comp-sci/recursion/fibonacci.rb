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

# Memoisation
def fib_memo(n)
  @fib ||= {} # @fib = @fib || {}

  if @fib[n]
    @fib[n]
  elsif n == 1 || n == 2
    1
  else
    result = fib_memo(n-1) + fib_memo(n-2)
    @fib[n] = result
    result
  end
end

# Linear recursion
# TODO: Research Tail Call Optimisation (TCO)
def fib(n, a=1, b=1)
  if n == 1 || n == 2
    b # Base case
  else
    fib(n-1, b, a+b)
  end
end

require 'pry'
binding.pry
