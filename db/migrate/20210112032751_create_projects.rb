class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :location
      t.float :energy_amount
      t.string :units
      t.timestamp :cod_date
      t.float :irr
      t.string :operator
      t.string :image_url
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
