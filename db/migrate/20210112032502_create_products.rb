class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :total_dollars
      t.integer :shares
      t.string :image_url
      t.string :co2_offset
      t.float :irr
      t.float :management_fee
      t.float :cost_basis
      t.string :description
      t.boolean :open
      t.float :percent_change

      t.timestamps
    end
  end
end
