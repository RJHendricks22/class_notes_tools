class CreateWizards < ActiveRecord::Migration[5.0]
  def change
    create_table :wizards do |t|
      t.string :name
      t.string :wand_type
      t.integer :age
      t.string :beard_color
      t.string :power

      t.timestamps
    end
  end
end
