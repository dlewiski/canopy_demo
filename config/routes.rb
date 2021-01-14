Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :products
    resources :projects
  end

  get '*path', to: 'pages#index', via: :all
end
