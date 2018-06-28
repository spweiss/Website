Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#home'
  get '/article', to: 'static_pages#article'
  get '/render', to: 'static_pages#render'
end
