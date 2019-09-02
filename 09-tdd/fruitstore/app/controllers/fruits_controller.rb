class FruitsController < ApplicationController
  def index
    @fruits = Fruit.order(:created_at => 'desc')  # .all.reverse

    respond_to do |format|
      format.html { } # This empty block tells Rails to apply the default behaviour: render index
      format.json { render :json => @fruits }
    end
  end

  def create
    @fruit = Fruit.new fruit_params
    if @fruit.save
      redirect_to fruit_path(@fruit)
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end
