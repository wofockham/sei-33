class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params # Set up the user but don't save yet.    
    if @user.save # .save returns true if the user is valid, and false otherwise.
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
