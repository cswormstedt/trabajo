class AppController < ApplicationController

	get '/' do
		token = params[:token]
		user = User.where(token: token)
		user_id = user[0].id
		# p params
		
		applications = Application.where(user_id: user_id)
		applications.to_json
			
	end

	get '/:id' do
		id = params[:id]
		applications = Application.find(id)
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
		Application.to_json
	end

	patch '/:id' do
		id = params[:id]
	    application = Application.find(id)
	    request_body = JSON.parse(request.body.read)
	    application.update_attributes(request_body)
	    application.save
	    Application.all.to_json
	end

	delete '/:id' do
	    id = params[:id]
	    application = application.find(id)
	    application.destroy
	    Application.all.to_json
	end

end