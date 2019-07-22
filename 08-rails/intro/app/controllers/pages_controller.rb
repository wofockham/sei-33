class PagesController < ApplicationController
  def hello
    render :hello
  end

  def faq
    render :faq
  end

  def about
    render :about
  end

  def lol
    render :lol
  end
end
