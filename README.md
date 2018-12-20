# Scorecard App
## Origin Story
Back in the day, I used to scorekeep basketball games at the rec department for extra money. We used paper and pencil, so you had to remember to bring a pencil, and it better have an eraser. I longed for a better solution, one that was more flexible and powerful. This app keeps score for golf, and is part of a planned series of scorekeeping apps for baseball, basketball, ping pong, and others.

## Stack
-- Built using Redux and React bootstrapped with create-react-app 
-- React used to update multiple values on the scorecard simultaneously
-- Uses Redux to track overall status of the game and to integrate with a planned future backend. 
-- Includes React Router to navigate the app and to select holes to edit.

## Development
-- A personal project in order to learn React and Redux
-- Developed through a series of iterative development cycles 
-- Beginning with a list of feature and issues
-- Addressing them one by one on separate git branches
-- Starting another cycle after merging the changes to master
-- Working solo was difficult as all decisions fell on my shoulders
-- Tendency to be overambitious with my features.

### How It Works
The app is currently a single page application that scales nicely for mobile. When the user arrives at the application page, the scorecard is visible, pre-filled with dummy data. The user can click the reset button to reset the scorecard for a new round. Then, the user selects the par column and the hole number to change the par for a hole, and selects the shots column to change the shots for the hole. As shots and pars are added or removed from the app the entire scorecard with update.

### Guts
#### Redux
The entire state of the app is maintained at the top level of the app and passed down to scorecard components. Mostly, the Redux store is setup to hold all of the user's rounds and courses as well as the current round and course. For the MVP, these are the same.
#### React Router
Sits at the top of the app and directs traffic to components appropriately. While the router will eventually be helpful in sending the user to a login page and displaying different courses or holes, right now it is employed to select holes to add shots or edit par. This involves a combination of route paraments and dynamic links.

## Deployment
This app is available as a live demo at https://scorecard.collinargo.com. This domain is registered with Google Domains and is hosted on an AWS server. PM2 is used to run the app continuously, while nginx directs network traffic to it. Finally certbot was used to generate SSL certificates for the site.

## Future Plans
-- Redux undo/redo features
-- Multiple players
-- Multiple courses
-- Express, MongoDB backend to store user rounds
-- React Native
-- Multiple golf game types
-- Develop apps for other sports