class ComplimentsController < ApplicationController
  def index
    # found this on http://stackoverflow.com/questions/5342270/rails-3-get-random-record
    @compliment = Compliment.order("RANDOM()").first    
  end

  def show
    compliment = Compliment.order("RANDOM()").first
    @personal_compliment = "Greetings #{params[:name]}, #{compliment[:text]}"
  end
  
  def new
  end
  
  def create
    Compliment.create(text: params[:text])

    redirect_to('/')
  end
  
  def list
    @compliments = Compliment.all
  end
  
  def edit
    @compliment = Compliment.find_by(id: params[:id])
  end
  
  def update
    @compliments = Compliment.find_by(id: params[:id])
      if @compliments.update_attributes(
        text: params[:text])
      else
        render 'edit'
      end
    redirect_to('/compliments/list')
  end
  
  def destroy
    Compliment.destroy(params[:id])
    redirect_to('/compliments/list')
  end
end
