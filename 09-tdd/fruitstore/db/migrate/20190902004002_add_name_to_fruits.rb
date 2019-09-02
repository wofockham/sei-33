class AddNameToFruits < ActiveRecord::Migration[5.2]
  def change
    add_column :fruits, :name, :text
  end
end
