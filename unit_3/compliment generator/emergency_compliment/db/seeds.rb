# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Compliment.destroy_all

Compliment.create([
  {text: "People behind you in class think you are the perfect height."},
  {text: "Your instructors think you're amazing."},
  {text: "Your posture during breaks effectively masks your exhaustion."},
  {text: "Your commit messages are an inspiration to us all"},
  {text: "You are your parent's greatest accomplishment, unless they invented the \"spork\"."},
  {text: "I’d give you the last piece of my gum even if I’d just ate garlic."},
  {text: "You are the moon of my life...my sun and stars"}
])
