require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# Root or home page
get '/' do
  "Hello world from the home page"
end

get '/hello' do
  "HELLO WORLD FROM SINATRA! I DID IT MY WAY!"
end

get '/goodbye' do
  "Goodbye Cruel World!!!!"
end

get '/lucky_number' do
  "Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is: #{ `uptime` }"
end

# Marx Brothers Fanclub

# An infinite number of URLs
get '/fanclub/:name'  do
  "#{ params[:name].capitalize } is a proud member of the Marx Brothers fanclub"
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fanclub"
end

get '/fanclub/:first/:last/:favourite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud member of the Marx Brothers fanclub and their favourite Marx Brother is #{ params[:favourite].capitalize }"
end

# Second crappiest calculator of the course
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is <strong>#{ result }"
end

# Significant problems:

# 1. Where is our HTML? How do write without self harming?
# 2. How do we get input from a user without them manually changing the URL?
