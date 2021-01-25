class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :total_dollars, :slug, :shares, :image_url, :co2_offset, :irr, :management_fee, :cost_basis, :description, :open, :percent_change, :projects
end
