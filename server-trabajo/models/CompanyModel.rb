class Company < ActiveRecord::Base
	self.table_name = 'companies'

	has_many :jobs
	has_many :contacts
end