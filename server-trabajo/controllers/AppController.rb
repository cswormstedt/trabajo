class AppController < ApplicationController

	get '/' do
		token = params[:token]
		user = User.where(token: token)
		user_id = user[0].id
		# p params
		
		applications = Application.where(user_id: user_id)
		applications.to_json
			
	end

	# get '/:company' do
	# 	token = params[:token]
	# 	user = User.where(token: token)
	# 	user_id = user[0].id
	# 	company = params[:company_name]
	# 	applications = Application.where(user_id: user_id)
	# 	applications.to_json
	# end

	get '/:id' do
		id = params[:id]
		token = params[:token]
		user = User.where(token: token)
		user_id = user[0].id
		
		application = Application.find(id)
		application.to_json
	end

	post '/' do
		token = params[:token]
		user = User.where(token: token)
		user_id = user[0].id
		request_body = JSON.parse(request.body.read)
		application = Application.new(request_body)
		application["user_id"] = user_id
		application.save
		applications = Application.where(user_id: user_id)
		applications.to_json
	end

	patch '/:id' do
		token = params[:token]
		user = User.where(token: token)
		user_id = user[0].id
		id = params[:id]
	    application = Application.find(id)
	    request_body = JSON.parse(request.body.read)
	    application.update_attributes(request_body)
	    application.save
	    applications = Application.where(user_id: user_id)
		applications.to_json

	end

	delete '/:id' do
		token = params[:token]
		user = User.where(token: token)
		user_id = user[0].id
	    id = params[:id]

	    application = Application.find(id)
	    application.destroy
	   
		applications = Application.where(user_id: user_id)
		applications.to_json
	end

end