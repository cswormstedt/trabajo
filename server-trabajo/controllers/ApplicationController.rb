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

	post '/' do
		request_body = JSON.parse(request.body.read)
		application = Application.new(request_body)
		job = Job.new(request_body)
		contact = Contact.new(request_body)
		company = Company.new(request_body)
		application.save
		job.save
		contact.save
		company.save
		Application.all.to_json
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