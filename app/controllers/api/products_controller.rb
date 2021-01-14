module Api
  class ProductsController < ApplicationController
    # /api/products
    # Return all products
    # GET
    def index
      products = Product.all

      render json: ProductSerializer.new(products, options)
    end

    # /api/products/:id
    # Return a product based upon id provided
    # GET
    def show 
      product = Product.find(params[:id])

      render json: product
    end

    private

    def options
      @options ||= { include: %i[projects] }
    end
  end
end