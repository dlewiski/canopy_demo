module Api
  class ProductsController < ApplicationController
    # /api/products
    # Return all products
    # GET
    def index
      products = Product.all.includes(:projects)

      render json: products
    end

    # /api/products/:slug
    # Return a product based upon id provided
    # GET
    def show 
      product = Product.find_by(params[:slug])

      render json: product
    end

    private

    def options
      @options ||= { include: %i[projects] }
    end
  end
end