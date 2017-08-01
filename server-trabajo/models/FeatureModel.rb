class Feature < ActiveRecord::Base
	self.table_name = 'features'
	belongs_to :application
end