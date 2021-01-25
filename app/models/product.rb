class Product < ApplicationRecord
  has_many :projects

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end
