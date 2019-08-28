class PagesController < ApplicationController
  def home
  end
  
  def hamldemo
    @lucky_number = (1..40).to_a.sample
  end
end
