class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end
  
  def show
    @cheese = Cheese.find_by(id: params[:id])
  end
    
  def create
    def new
    end
      Cheese.create(name: params[:name],
                  milk_type: params[:milk_type],
                  description: params[:description],
                  image_url: params[:image_url],
                  stank_level: params[:stank_level])
      redirect_to('/cheeses')
  end
  
  def destroy
    Cheese.destroy(params[:id])
    redirect_to('/cheeses')
  end
  
#  def edit
#    @cheese = Cheese.find_by(id: params[:id])
#  end
#  
#  def update
#    @cheeses = Cheese.find_by(id: params[:id])
#  end
end
