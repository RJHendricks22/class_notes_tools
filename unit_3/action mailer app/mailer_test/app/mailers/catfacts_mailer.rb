class CatfactsMailer < ApplicationMailer
  default from: "shoebillmailer@gmail.com"

  def catfacts_welcome(email)
    @email = email
    puts "ATTEMPTING TO SEND MAIL!!!!"
    mail(to: @email, subject: "Welcome to CatFacts, #{@email}")
  end

end