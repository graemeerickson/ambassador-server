var db = require('./models/user');

var ambassadors = [{
  firstName: 'Lucas',
  lastName: 'Santini',
  email: 'lucassantinidev@gmail.com',
  password: 'testpassword',
  phoneNumber: '407-545-9216',
  locationCoordinates: [-122.2512054,47.7610866],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Simmy',
  lastName: 'Virk',
  email: 'simmyvirk@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.3257,47.6797],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Alex',
  lastName: 'Smith',
  email: 'alexsmith@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.0369604,47.5303557],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Bradley',
  lastName: 'Serlis',
  email: 'bradleyserlis@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.1034761,47.6820648],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Jessi',
  lastName: 'Heger',
  email: 'jessiheger@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.3657601,47.6394689],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Karla',
  lastName: 'Ortiz',
  email: 'karlaortiz@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.3259523,47.6097749],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Alex',
  lastName: 'White',
  email: 'alexwhite@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-86.8515,21.1619],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Jack',
  lastName: 'Pound Jr',
  email: 'jackpoundjr@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.2923472,47.5592676],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Gil',
  lastName: 'Weinstock',
  email: 'gilweinstock@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.3163023,47.6109314],
  role: ['Neighborhood Ambassador']
},
{
  firstName: 'Van',
  lastName: 'Ha',
  email: 'vanha@email.com',
  password: 'testpassword',
  phoneNumber: '555-555-5555',
  locationCoordinates: [-122.304563,47.82221999999999],
  role: ['Neighborhood Ambassador']
}]

console.log('entering remove & create functions');
db.remove({}, function(err, users){
  if (err) { return console.log('ERROR', err); }
})

ambassadors.forEach( ambassador => {
  console.log(ambassador);
  db.create(ambassador, function(err, user){
    if (err) { return console.log('ERROR', err); }
    console.log("user created:", user);
  });
})
