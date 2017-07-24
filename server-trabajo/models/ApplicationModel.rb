class Application < ActiveRecord::Base
	self.table_name = 'applications'

	belongs_to :user
	has_many :jobs
	has_many :contacts
	has_many :companies
end
