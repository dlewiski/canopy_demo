class AddValueToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :value, :integer
  end
end
