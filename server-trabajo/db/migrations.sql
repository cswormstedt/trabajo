CREATE DATABASE trabajo;

CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255), 
					password_digest VARCHAR(255), token VARCHAR(255));

CREATE TABLE applications (id SERIAL PRIMARY KEY, app_date DATE, 
							job_title VARCHAR(255), job_description VARCHAR(255), 
							contact_name VARCHAR(255), contact_email VARCHAR(255), 
							company_name VARCHAR(255), user_id INT references users(id));

CREATE TABLE features (id SERIAL PRIMARY KEY, heart BOOLEAN, 
						notes TEXT, application_id INT references applications(id));
