def countdown_iterative(n=10)
  while n >= 0 # end condition
    puts n
    n -= 1 # mutation: moving towards the end condition
    sleep 1
  end

  puts "Blast off!"
end

def countdown_recursive(n=10)
  if n < 0 # end condition
    puts "Blast off"
  else
    puts n
    sleep 1
    countdown_recursive n-1
  end
end

require 'pry'
binding.pry
