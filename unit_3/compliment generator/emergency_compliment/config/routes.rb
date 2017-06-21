Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :compliments, except: [:index, :show]
  get "/", to: "compliments#index"
  get "/:name", to: "compliments#show"
  get "/compliments/list", to: "compliments#list"
end
