require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

# INDEX -- show and link to all the butterflies in the database
get '/butterflies' do
  @butterflies = query_db 'SELECT * FROM butterflies'
  erb :butterflies_index
end

# NEW -- show the user a form to enter a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE -- insert a new butterfly into the database
post '/butterflies' do
  query = "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  query_db query
  redirect to('/butterflies') # GET request
end

# SHOW -- show you all the info for a particular butterfly, based on its ID.
get '/butterflies/:id' do
  @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first # Extract the single butterfly hash from the array.
  erb :butterflies_show
end

# EDIT -- show the form to edit a particular existing butterfly
get '/butterflies/:id/edit' do
  # get the butterfly from the database
  @butterfly = query_db "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
  @butterfly = @butterfly.first
  # render the form
  erb :butterflies_edit
end

# UPDATE -- update the database with new information for some particular butterfly
post '/butterflies/:id' do
  query = "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id = #{ params[:id] }"
  query_db query
  redirect to("/butterflies/#{ params[:id] }")
end

# DESTROY -- delete the butterfly with some butterfly ID from the database
get '/butterflies/:id/delete' do
  query_db "DELETE FROM butterflies WHERE id = #{ params[:id] }"
  redirect to('/butterflies')
end

def query_db(sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # Implicit return
end
