class CreateReview < ActiveRecord::Migration[5.0]
  def change
  	create_table :reviews do |t|
  		t.integer :stars
  		t.belongs_to :user, index: true
  		t.belongs_to :book, index: true
  		t.string     :subject
  		t.string		 :content
      t.string     :reviewer 
  		t.timestamps
  	end
  end
end
