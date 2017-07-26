class User < ActiveRecord::Base
	self.table_name = 'users'
	
	has_many :applications

	has_secure_password
end 