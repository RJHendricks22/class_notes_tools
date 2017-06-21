class TrainsController < ApplicationController
  def index
    response = HTTParty.get('http://mtastat.us/api/trains')
    @body = JSON.parse(response)
#    @train_name = @body["name"]
#    @long_status = @body["long_status"]
  end
  
  def show
    train_line = params[:id]
    response = HTTParty.get("http://mtastat.us/api/trains/#{train_line}")
    @body = JSON.parse(response)
    @train_name = @body["name"]
    @long_status = @body["long_status"]
  end
end
