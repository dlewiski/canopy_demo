module Api
  class ProductsController < ApplicationController
    # /api/products
    # Return all products
    # GET
    def index
      products = Product.all

      render json: products
    end

    # /api/products/:id
    # Return a product based upon id provided
    # GET
    def show 
      product = Product.find(params[:id])

      render json: product
    end
  end
end