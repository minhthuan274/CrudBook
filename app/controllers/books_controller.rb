class BooksController < ApplicationController

	get '/new_book' do 
		redirect_if_not_logged_in
		@user = current_user
		erb :'books/new'
	end

	post '/new_book' do

		cuser = current_user
		if params[:title] == "" 
			redirect '/book/new'
		end
		@book = Book.new(
				:title		=>	params[:title],
				:publisher => params[:publisher],
				:author    => cuser.last_name + cuser.first_name,
				:year     =>  params[:year],

			)
		@book.user_id = current_user_id
		@book.save

		redirect '/user'
	end

	get '/book/:id' do 
		@book = Book.find_by_id(params[:id])
		@reviews = @book.reviews
		@user = current_user
		session[:book_id] = @book.id
		erb :'books/show'
	end

	get '/book/edit/:id' do 
		@book = Book.find_by_id(params[:id])
		@current_id = current_user.id
		erb :'books/edit'
	end

	put '/book/edit/:id' do 
		@book = Book.find_by_id(params[:id])
		@book.title = params[:title]
		@book.publisher = params[:publisher]
		@book.year = params[:year]
		@book.save
		url = '/book/' + params[:id]
		redirect url
	end

end
