class CreateRocks < ActiveRecord::Migration[5.0]
  def change
    create_table :rocks do |t|
      t.string :name
      t.string :description
      t.string :image
      t.timestamps
    end
  end
end
