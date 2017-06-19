require 'sinatra'
require 'sinatra/reloader'


  get '/' do 
    @user = 'ray'
    erb :index
  end

  get '/users/:user' do
    @user = params[:user]
    erb :index
  end

#template = "Dear School Nurse:<br>FIRST_NAME will not be in class today.  He/she has come down with a case of ILLNESS and a(n) ADJECTIVE fever. We have made an appointment with Dr. RANDOM_NAME, who studied in PLACE, an expert in ILLNESS.  He will send you some of the relevant information.<br>Sincerely, <br>Mr. LAST_NAME"
#
#get "/:first_name/:illness/:adjective/:random_name/:place/:last_name" do
#  template.gsub!('FIRST_NAME',params[:first_name])
#  template.gsub!('ILLNESS',params[:illness])
#  template.gsub!('ADJECTIVE',params[:adjective])
#  template.gsub!('RANDOM_NAME',params[:random_name])
#  template.gsub!('PLACE',params[:place])
#  template.gsub!('LAST_NAME',params[:last_name])
#end
get '/add/:x/:y' do
  if params[:x].to_f.class != Float ||
    params[:y].to_f.class != Float
    @answer = "you didn\'t enter numbers"
  else
    @answer = params[:x].to_f + params[:y].to_f
  end
  erb :index
end
get '/subtract/:x/:y' do
  if params[:x].to_f.class != Float ||
    params[:y].to_f.class != Float
    @answer = "you didn\'t enter numbers"
  else
    @answer = params[:x].to_f - params[:y].to_f
  end
  erb :index
end
get '/multiply/:x/:y' do
  if params[:x].to_f.class != Float ||
    params[:y].to_f.class != Float
    @answer = "you didn\'t enter numbers"
  else
    @answer = params[:x].to_f * params[:y].to_f
  end
  erb :index
end
get '/divide/:x/:y' do
  if params[:x].to_f.class != Float ||
    params[:y].to_f.class != Float
    @answer = "you didn\'t enter numbers"
  else
    @answer = params[:x].to_f / params[:y].to_f
  end
  erb :index
end