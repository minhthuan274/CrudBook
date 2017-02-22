class CreateBook < ActiveRecord::Migration[5.0]
  def change
  	create_table :books do |t|
  		t.string		 :title
  		t.belongs_to :user, index: true
  		t.string     :author
  		t.string		 :publisher
  		t.integer    :year
  		t.timestamps
  	end
  end  
end


