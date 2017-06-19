class Car
  attr_accessor :make, :model, :year, :color, :miles
  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0
  end
  
  def seen_another_year
    @miles += 15000
  end
  
  def details
    if @miles < 50000
      puts "This #{@year} #{@make} #{@model} has #{@miles} miles on it"
    else
      puts "This #{@year} #{@make} #{@model} has #{@miles} miles on it and that #{@color} paint is really starting to fade!"
    end
  end
  def ahh_fresh_paint(new_color)
    puts "The new #{new_color} was a good choice!"
  end
  
  def paint_change(new_color)
    @color = new_color
    ahh_fresh_paint(new_color)
  end
end

car1 = Car.new('Honda','Civic','2014','Gray')
p car1
car1.seen_another_year
car1.seen_another_year
car1.seen_another_year
car1.seen_another_year
p car1
car1.details
car1.paint_change('black')
car1.details