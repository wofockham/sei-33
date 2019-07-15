# Examples of conditionals

a = 13

if a > 5
  puts "Yes, a is greater than 5."
end

# else if ######################################################################
grade = 'D'

if grade == 'A'
  puts "You are killing it"
elsif grade == 'B'
  puts "You are coasting fine"
elsif grade == 'C'
  puts "Adequate"
else
  puts "Please see Rashida after class"
end

# case #########################################################################
# in JS this the switch() statement

grade = 'B'
case grade
  when 'A'
    puts "You are killing it"
  when 'B'
    puts "You are coasting fine"
  when 'C'
    puts "Adequate"
  else
    puts "Please see Rashida after class"
end

# Modifier statements AKA backwards if statements
puts "Yes a is greater than 5" if a > 5

# Unless is like the opposite of if:
live_server = false
unless live_server
  puts "You are on localhost"
end

age = 35
puts "You are legally allowed to buy cigarettes" unless age < 18
