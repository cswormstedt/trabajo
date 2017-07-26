require 'bundler'
Bundler.require

require './models/ApplicationModel'
require './models/UserModel'

require './controllers/ApplicationController'
require './controllers/AppController'
require './controllers/UserController'

run Sinatra::Application

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'trabajo'
  )

map('/applications'){run AppController}
map('/users'){run UserController}