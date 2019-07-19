# Objects in Ruby store data and functionality (methods) together.

# Kind of like a hash -- it has key/value pairs to store
# BUT you have to predefine the keys that are going to be used
# (you have to predefine the "shape")
# You can't add random keys later like you can with a hash.
# AND ALSO: unlike a hash, an object has methods.

require 'pry'

# Superclass
class Actor
  def award_speech
    "I would like to thank my parents and my agent. We did it baby."
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember and he's not type."
  end
end

# Inheritance
class Stooge < Actor
  def terrible?
    true
  end
end

class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice # Macro

  def initialize(n='', i='', v='mocking authority') # Variadic
    @name = n
    @instrument = i
    @vice = v
  end

  def accept_award
  end

  def play
    "My name is #{ @name } and I play the #{ @instrument }."
  end
end

groucho = MarxBrother.new 'Groucho Marx', 'guitar', 'cigars'
# groucho.name = 'Groucho Julius Marx'
# groucho.instrument = 'guitar'
# groucho.vice = 'cigars'

harpo = MarxBrother.new
harpo.name = 'Harpo Marx'

binding.pry
