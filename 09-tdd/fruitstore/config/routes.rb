Rails.application.routes.draw do
  resources :fruits, :except => [:edit, :update, :destroy]
end
