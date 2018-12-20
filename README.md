# Scorecard App
## Origin Story
Back in the day, I used to scorekeep basketball games at the rec department for extra money. We used paper and pencil, so you had to remember to bring a pencil, and it better have an eraser. I longed for a better solution, one that was more flexible and powerful. This app keeps score for golf, and is part of a planned series of scorekeeping apps for baseball, basketball, ping pong, and others.

## Stack
- Built using Redux and React bootstrapped with create-react-app 
- React used to update multiple values on the scorecard simultaneously
- Uses Redux to track overall status of the game and to integrate with a planned future backend. 
- Includes React Router to navigate the app and to select holes to edit.

## Development
- A personal project in order to learn React and Redux
- Developed through a series of iterative development cycles 
- Beginning with a list of feature and issues
- Addressing them one by one on separate git branches
- Starting another cycle after merging the changes to master
- Working solo was difficult as all decisions fell on my shoulders
- Tendency to be overambitious with my features.

### How It Works
![alt text](https://github.com/SCollinA/scorecard/scorecard.png "Sample Screenshot")
- Single page application that scales nicely for mobile
- Scorecard is visible on main page pre-filled with dummy data
- Click the reset button to reset the scorecard for a new round
- Select the par column and the hole number to change the par for a hole
- Select the shots column to change the shots for the hole
- Entire scorecard updates on each change

### Guts
#### Redux
- Entire state of the app is maintained at the top level of the app
- State passed down to scorecard components
- Store mostly setup to hold all of the user's rounds and courses as well as the current round and course
- For the MVP, these are the same.

#### React Router
- Sits at the top of the app
- Directs traffic to components appropriately
- Eventually will be helpful in sending the user to a login page and displaying different courses or holes
- Right now employed to select holes to add shots or edit par
- Involves a combination of route paraments and dynamic links.

## Deployment
- Available as a live demo at https://scorecard.collinargo.com
- Registered with Google Domains and is hosted on an AWS server
- PM2 is used to run the app continuously
- nginx directs network traffic to it
- certbot was used to generate SSL certificates for the site

## Challenges
- working solo
- paradox of choice
- learning new technology
- having two new kittens
![alt text](https://github.com/SCollinA/scorecard/scorecard.png "Sample Screenshot")

## Future Plans
- Redux undo/redo features
- Multiple players
- Multiple courses
- Express, MongoDB backend to store user rounds
- React Native
- Multiple golf game types
- Develop apps for other sports