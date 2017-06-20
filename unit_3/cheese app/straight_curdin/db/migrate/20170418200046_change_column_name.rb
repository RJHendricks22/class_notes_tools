class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :cheeses, :img_url, :image_url
  end
end
