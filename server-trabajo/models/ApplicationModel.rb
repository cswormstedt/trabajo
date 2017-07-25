class Application < ActiveRecord::Base
	self.table_name = 'applications'
	belongs_to :user
end
