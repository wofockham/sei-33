# Greeting program to experiment with keyboard input and screen output

print "What is your name? " # print() does not add a trailing new line.
name = gets.chomp # Using chaining to read a string and remove the newline.

puts "Thank you for entering #{ name }."

print "What is your surname? "
surname = gets.chomp

puts "Your full name is #{ name } #{ surname }."

print "Where do you live? "
address = gets.chomp

puts "Your name is #{ name } #{ surname } and you live at #{ address }."
