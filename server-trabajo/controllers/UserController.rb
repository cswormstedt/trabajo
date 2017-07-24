require 'SecureRandom'

class UserController < MainController
	# post to user/register
	post '/register' do
		user_details = JSON.parse(request.body.read)
		user = User.new

		user.email = user_details["email"]
		user.password = user_details["password"]
		user.token = SecureRandom.hex

		user.save
		user.to_json
	end
	# post to user/login
	post '/login' do
		user_details = JSON.parse(request.body.read)
		user = User.find_by({email: user_details["email"]})
		if user && user.authenticate(user_details["password"])
			user.to_json
		else
			"ACCESO DENEGADO"
		end
		
	end

end