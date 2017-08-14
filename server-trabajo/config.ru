require 'bundler'
Bundler.require

require './models/ApplicationModel'
require './models/UserModel'
require './models/FeatureModel'

require './controllers/ApplicationController'
require './controllers/AppController'
require './controllers/UserController'
require './controllers/FeatureController'

run Sinatra::Application

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'trabajo'
  )

map('/applications'){run AppController}
map('/users'){run UserController}
map('/features'){run FeatureController}
