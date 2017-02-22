class CreateUser < ActiveRecord::Migration[5.0]
  def change
  	create_table :users do |t|
  		t.string :first_name
  		t.string :last_name
  		t.string :email
  		t.string :password
  		t.string :avatar_path
      t.string :about_me
  		t.integer :status
  		t.timestamps
  	end
  end
end
