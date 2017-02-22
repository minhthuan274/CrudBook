class ReviewsController < ApplicationController 
	get '/new_review' do 
		redirect_if_not_logged_in
		@user = current_user
		erb :'reviews/new_review'
	end

	post '/new_review' do 
		@review = Review.new(
				:subject => params[:subject],
				:reviewer => current_user.last_name,
				:content => params[:content],
				:stars   => params[:stars]
			)
		@review.user_id = current_user.id
		@review.book_id = session[:book_id]
		@review.save

		url = '/book/' + session[:book_id].to_s
		redirect url
	end

	get '/review/edit/:id' do 
		@review = Review.find_by_id(params[:id])
		@book = Book.find_by_id(@review.book_id)
		@user = User.find_by_id(@review.user_id)
		if current_user.id == @review.user_id
			erb :'/reviews/edit_review'
		else
			url = '/book/' + @review.book_id
			redirect url
		end
	end

	put '/review/edit/:id' do 
		@review = Review.find_by_id(params[:id])
		@review.subject = params[:subject]
		@review.content = params[:content]
		@review.stars   = params[:stars]
		@review.save

		url = '/book/' + @review.book_id
		redirect url
	end

	delete '/review/delete/:id' do 
		@review = Review.find_by_id(params[:id])
		@review.destroy
	end

end