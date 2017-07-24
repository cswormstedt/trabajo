CREATE DATABASE trabajo;

CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255), 
					password_digest VARCHAR(255), token VARCHAR(255));

CREATE TABLE applications (id SERIAL PRIMARY KEY, app_date DATE, job_id INT references jobs(id), 
							contact_id INT references contacts(id), 
							company_id INT references companies(id));

CREATE TABLE jobs (id SERIAL PRIMARY KEY, title VARCHAR(255), description VARCHAR(255));

CREATE TABLE contacts (id SERIAL PRIMARY KEY, first_name VARCHAR(255), 
						last_name VARCHAR(255), email VARCHAR(255));

CREATE TABLE companies (id SERIAL PRIMARY KEY, name VARCHAR(255), 
						jobs INT references jobs(id), 
						contact_id INT references contacts(id));