class UsersController < ApplicationController
	
	# ** Sign up
	get '/signup' do
		if logged_in? 
			redirect '/info'
		else
			erb :'users/signup'
		end
	end

	post '/signup' do 
    temp = User.find_by(:email => params[:email])
    if temp != nil #the email's exist
      redirect '/signup'
    end

		if params[:email] == "" || params[:password] == ""
			redirect '/signup'
		else
      file = params[:file][:tempfile]
      File.open("./public/upload/images/#{params[:email]}", 'wb') do |f|
        f.write(file.read)
      end

			@user = User.create(
					:first_name =>   params[:first_name],
					:last_name =>    params[:last_name],
					:email =>       params[:email],
					:password =>    params[:password],
					:about_me =>    params[:about_me],
          :avatar_path =>  "./upload/images/#{params[:email]}"
			)
			session[:user_email] = @user.email
			redirect '/user'
		end
	end

  # ** Login
  get '/login' do
  	if logged_in?
  		redirect '/user'
  	else
  		erb :'users/login'
  	end
  end

  post '/login' do
  	@user = User.find_by(:email => params[:email])
  	if @user && @user.password == params[:password]
  		session[:user_email] = @user.email
  		redirect '/user'
  	else
  		redirect '/login'
  	end
  end

  # ** Logout

  get '/logout' do 
  	if session[:user_email] != nil
  		session.clear
  		redirect to '/login'
  	else
  		redirect to '/'
  	end
  end

  # ** Info
  get '/info' do 
  	@user = current_user
  	erb :'users/info'
  end

  put '/info' do 
    @user = current_user
    @user.first_name = params[:first_name]
    @user.last_name = params[:last_name]
    @user.password = params[:about_me]

    # Update avatar
    fileUpload = params[:avatar][:tempfile]
    if fileUpload != nil
      File.delete(@user.avatar_path) if File.exist?(@user.avatar_path)

      File.open("./public/upload/images/#{@user.email}", 'wb') do |f|
      f.write(fileUpload.read)
      end
    end
    @user.save
    redirect '/info'
  end

  delete '/delete/:id' do 
    @user = User.find_by_id(params[:id])
    @user.destroy
  end

  # ** Individual User

  get '/user' do 
    redirect_if_not_logged_in
    @user = current_user
    @books = Book.where("user_id = ?", current_user_id)
    erb :'users/user'
  end

  # ** Search 

  get '/search' do 
    @books = Book.all
    @title_key = session[:title]
    erb :'users/search'
  end

  post '/search' do 
    session[:title] = params[:title]
    redirect '/search'
  end

end