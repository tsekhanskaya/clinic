Rails.application.routes.draw do
  resources :employees
  resources :positions
  resources :patients
  resources :specializations

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
