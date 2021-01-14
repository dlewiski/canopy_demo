class ProductSerializer
  include JSONAPI::Serializer
  attributes :name, :total_dollars, :shares, :image_url, :co2_offset, :irr, :management_fee, :cost_basis, :description, :open, :percent_change

  has_many :projects
end