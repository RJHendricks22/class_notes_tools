class RocksController < ApplicationController

  def index
    @rocks = Rock.all
  end

  def show
    @rock = Rock.find_by(id: params[:id])
  end

  def new
  end

  def create
    Rock.create(name: params[:name],
      image: params[:image],
      description: params[:description])
    redirect_to('/rocks')
  end

  def destroy
    Rock.destroy(params[:id])
    redirect_to('/rocks')
  end

  def edit
    @rock = Rock.find_by(id: params[:id])
  end

  def update
    @rocks = Rock.find_by(id: params[:id])
      if @rocks.update_attributes(
        name: params[:name],
        description: params[:description],
        image: params[:image])
      else
        render 'edit'
      end
    redirect_to('/rocks')
  end
end
