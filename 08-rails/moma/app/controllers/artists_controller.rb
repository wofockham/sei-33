class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def create
    Artist.create params[:artist]
  end

  def edit
  end

  def show
    @artist = Artist.find params[:id]
  end
end
