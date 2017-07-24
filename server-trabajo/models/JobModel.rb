class Job < ActiveRecord::Base
	self.table_name = 'job'

	belongs_to :application
	belongs_to :company
end