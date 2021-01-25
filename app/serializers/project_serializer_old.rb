class ProjectSerializer
  include JSONAPI::Serializer
  attributes :location, :energy_amount, :units, :product_id
end