require 'httparty'
data = HTTParty.get 'http://numbersapi.com/random/trivia' # Sync
puts data
