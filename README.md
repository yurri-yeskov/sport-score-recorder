# Scorecard App
## Origin Story
Back in the day, I used to scorekeep basketball games at the rec department for extra money. We used paper and pencil, so you had to remember to bring a pencil, and it better have an eraser. I longed for a better solution, one that was more flexible and powerful. This app keeps score for golf, and is part of a planned series of scorekeeping apps for baseball, basketball, ping pong, and others.

## Stack
This app was build using Redux and React bootstrapped with create-react-app and includes React Router as well. I chose to use Redux in order to keep track of the overall status of the game and to integrate with a planned future backend. React was used to update multiple values on the scorecard simultaneously, and React Router will be used to navigate the app, but is now used to select holes to edit.

## Development
This app was developed as a personal project in order to learn React and Redux. I developed the app through a series of iterative development cycles beginning with a list of feature and issues and addressing them one by one before starting another cycle.

## Deployment
This app is available as a live demo at https://scorecard.collinargo.com. This domain is registered with Google Domains and is hosted on an AWS server. PM2 is used to run the app continuously, while nginx directs network traffic to it. Finally certbot was used to generate SSL certificates for the site.

## Future Plans
-- Include multiple players
-- Include multiple courses
-- Include multiple golf game types
-- Develop apps for other sports