# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Hostpital.create(name:'U 0f U', address:'123 main')
Hostpital.create(name:'LDS ', address:'345 state')

covid = Bug.create(name:'Covid')
sars  = Bug.create(name:'Sars')

covid.vaccines.create(name:'pfizer', effectiveness:92.0, maker:'pfzer')
covid.vaccines.create(name:'moderna', effectiveness:85.0, maker:'moderna')

sars.vaccines.create(name:'Candy Cane', effectiveness:92.0, maker:'France')
sars.vaccines.create(name:'Noodle Soup', effectiveness:92.0, maker:'Campbell')