require 'bundler'
Bundler.require

require './models/ApplicationModel'
require './models/UserModel'
require './models/CompanyModel'
require './models/ContactModel'
require './models/JobModel'

require './controllers/ApplicationController'
require './controllers/UserController'

run Sinatra::Application

ActiveRecord::Base.establish_connection(
	adapter: 'postresql',
	database: 'trabajo'
	)

map('/applications'){run ApplicationController}
map('/users'){run UserController}