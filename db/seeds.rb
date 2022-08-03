pp 'Planting seeds in database.'

pp 'Creating users...'
User.create(
  full_name: 'Erin Van Brunt',
  user_name: 'Erin',
  password: 'erin',
  email: 'erin@erin.com',
)

pp 'Done seeding.'
