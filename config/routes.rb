Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#home'
  get '/saber', to: 'static_pages#saber'
  get '/bio', to: 'static_pages#bio'
  get '/render', to: 'static_pages#render'
  get '/nature', to: 'static_pages#nature'
  get '/minesweeper', to: 'static_pages#minesweeper'
end
