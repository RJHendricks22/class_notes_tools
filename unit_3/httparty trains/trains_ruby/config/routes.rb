Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/", to: "trains#index"
  get "/:id", to: "trains#show"
end
