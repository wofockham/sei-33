class DashboardController < ApplicationController
  def brother
    brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    render :plain => `uptime`
  end

  def info
    brother = %w{ Groucho Harpo Chico Zeppo Gummo }.sample
    time = Time.now
    uptime = `uptime`
    fortune = `fortune`

    render :json => {
      :brother => brother,
      :time => time,
      :uptime => uptime,
      :lucky_number => rand(1..40),
      :fortune_cookie => fortune
    }
  end
end
