require './config/environment'

class ApplicationController < Sinatra::Base	
	
	configure do
		set :public_folder, 'public'
		set :views, 'app/views'
		enable :sessions
		set :session_secret, "super secret"
	end

	get '/' do 
		@users = User.all
		erb :index
	end

	helpers do 
		def redirect_if_not_logged_in
			if !logged_in?
				redirect '/login'
			end
		end

		def logged_in?
			!!session[:user_email]
		end

		def current_user
			User.find_by(:email => session[:user_email])
		end

		def current_user_id
			current_user.id
		end

		def get_user_by_id(id)
			User.find_by_id(id)
		end
	end

end