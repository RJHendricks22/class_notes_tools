Rails.application.routes.draw do
  resources :wizards, only: [:index, :show]
  resources :creatures, except: [:delete]
end
