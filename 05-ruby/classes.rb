require 'pry'
# Objects in Ruby store data and functionality (methods) together.

# Kind of like a hash -- it has key/value pairs to store
# BUT you have to predefine the keys that are going to be used
# (you have to predefine the "shape")
# You can't add random keys later like you can with a hash.
# AND ALSO: unlike a hash, an object has methods.

class MarxBrother
  attr_accessor :name, :instrument, :vice # Macro
end

groucho = MarxBrother.new
groucho.name=('Groucho Julius Marx')
groucho.instrument=('guitar')
groucho.vice=('cigars')

harpo = MarxBrother.new
harpo.name=('Harpo Marx')

binding.pry
