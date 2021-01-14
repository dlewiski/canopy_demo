module Api
  class ProjectsController < ApplicationController
    # /api/projects
    # Return all projects
    # GET
    def index
      projects = Project.all

      render json: projects
    end

    # /api/projects/:id
    # Return a projects based upon id provided
    # GET
    def show 
      project= Project.find(params[:id])

      render json: project
    end
  end
end