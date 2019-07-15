require 'pry'

def hello(name="World", adjective="Cruel")
  puts "Hello #{ adjective } #{ name }"
end

def add(a, b)
  a + b # Implicit return:  Ruby returns the value of the last line of code
end

puts "The total was: #{ add 4, 10 }"


binding.pry # Equivalent to Javascript `debugger`
