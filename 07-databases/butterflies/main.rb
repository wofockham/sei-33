require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX -- show and link to all the butterflies in the database
get '/butterflies' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  @butterflies = db.execute 'SELECT * FROM butterflies'

  db.close

  erb :butterflies_index
end

# NEW -- show the user a form to enter a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# SHOW -- show you all the info for a particular butterfly, based on its ID.
get '/butterflies/:id' do
  # connect to the database
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  # fetch butterfly number ID from the database
  puts "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = db.execute "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first # Extract the single butterfly hash from the array.

  # render the view
  erb :butterflies_show
end
