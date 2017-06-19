require "sinatra"
require 'sinatra/reloader'
require 'pry'

get "/name" do
  erb :index
end

get "/name/:name" do
  @name = params[:name]
  erb :index
end


get "/tea/:fname/:sname" do
  @name = params[:fname]
  @name2 = params[:sname]
  erb :tea
end

get "/battle/:fname/:sname" do
  num = rand(1..2)
  if num == 1
    @r1 = "#{params[:fname]} has beat #{params[:sname]}"
  elsif num == 2
    @r1 = "#{params[:sname]} has beat #{params[:fname]}"
  else
    @r1 = "this is an error"
  end
  erb :index
end

#get "/" do
#  @quest = "Who was the first man in space?"
#  erb :questions
#end
#
#get "/:answer" do
#  if params[:answer] == "yuri_gagarin"
#    @quest = "Correct. Who was the first man on the moon?"