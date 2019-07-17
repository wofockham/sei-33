require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/faq' do
  erb :faq
end

get '/result' do
  binding.pry
  "results coming soon"
end
