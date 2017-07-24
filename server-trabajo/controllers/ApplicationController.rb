class ApplicationController <  MainController

	get '/' do
		applications = Application.all
		applications.to_json
	end

	get '/:id' do
		id = params[:id]
		applications = Application.find(id)
		application.to_json
	end


end