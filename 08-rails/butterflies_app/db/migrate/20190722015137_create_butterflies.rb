class CreateButterflies < ActiveRecord::Migration[5.2]
  def change
    create_table :butterflies do |t|
      t.string :name
      t.string :family
      t.string :image

      t.timestamps
    end
  end
end
