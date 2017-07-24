class Contact < ActiveRecord::Base
	self.table_name = 'contacts'

	belongs_to :application
	belongs_to :company
end