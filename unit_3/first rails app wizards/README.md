# Setup

```
rails db:create
rails db:migrate
```

# Add data to the database:

```
rails console
```

Then add some Wizards!

```
Wizard.create(
  name: "Gandalf",
  wand_type: "Staff",
  age: 2019,
  beard_color: "white",
  power: "Istari"
)
```
