require 'sinatra'
require 'sinatra/reloader'

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
