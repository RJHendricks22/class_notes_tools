# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Wizard.create(
  name: "Gandalf",
  wand_type: "Staff",
  age: 2019,
  beard_color: "white",
  power: "Istari"
)

Wizard.create(
  name: "Harry",
  wand_type: "wand",
  age: 21,
  beard_color: "none",
  power: "Wizard"
)

Wizard.create(
  name: "Yoda",
  wand_type: "LightSabre",
  age: 8000,
  beard_color: "White",
  power: "The Force"
)