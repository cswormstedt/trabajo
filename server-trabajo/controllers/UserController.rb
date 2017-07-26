require 'SecureRandom'

class UserController < ApplicationController
	# post to users/register
	post '/register' do
		user_details = JSON.parse(request.body.read)
		puts user_details
		user = User.new

		user.email = user_details["email"]
		user.password = user_details["password"]
		user.token = SecureRandom.hex

		user.save
		user.to_json
	end
	
	# post to users/login
	post '/login' do
		user_details = JSON.parse(request.body.read)
		puts user_details
		user = User.find_by({email: user_details["email"]})
		if user && user.authenticate(user_details["password"])
			user.to_json
		else
			"ACCESO DENEGADO"
		end

	end

end