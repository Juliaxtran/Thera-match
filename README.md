Thera-Match
=========

## Group Members

- Julia Tran
- Patrice Pavico
- Will Frankland

## Project Description

Thera-Match was created to match users and therapists in an easy-to-use and simple manner. The app was brought about so that anyone seeking a therapist in their area could create a profile with basic information and then search for therapists to suit their needs as well as request appointments, message and video-chat and get therapist information and contact details.
The website has several functionalities including:

- Seperate user and therapist sign-up and login.
- Seperate user and therapist profile pages with the ability to update profile information.
- A dashboard for users to view, filter and select therapists based upon their needs which features a swipe mechanism influenced by dating app style functionality. 
- User-to-therapist messaging.
- User-to-therapist video-chat.
- A blog for articles to be posted in.
- A therapist dashboard with review, messaging and favourited features.
- A calendar which users can select dates and then request appointments upon set dates. The therpaist will recieve a notification and be able to respond to the the user.

## Project Stack

- React
- Express
- Node.js
- HTML
- CSS
- PostgreSQL

## Getting Started

To allow Thera-match to run locally on your computer follow the steps below:

1. Open two terminal windows. Navigate the first terminal to the `server` directory and the second to the `client` directory.
2. Run `npm i` in both terminals to install dependencies.
3. Run `npm start` in both terminals. React should open automatically on Chrome at http://localhost:3002/.
4. If the database needs to be reset for any reason, exit the server terminal by pressing `ctrl/cmd + C` and run `npm run db:reset`.
5. Accounts can be created on both the user and therapist side to utilize all features of the site.

## Screenshots

!["Screenshot of Thera-Match homepage"](https://github.com/Juliaxtran/Thera-match/blob/master/docs/Thera-Match%20Homepage.png?raw=true)
!["Screenshot of Thera-Match user dashboard"](https://github.com/Juliaxtran/Thera-match/blob/master/docs/Thera-Match%20Dashboard.png?raw=true)
!["Screenshot of Thera-Match user messaging page"](https://github.com/Juliaxtran/Thera-match/blob/master/docs/Thera-Match%20Messages.png?raw=true)
!["Screenshot of Thera-Match user video-chat"]()


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- PostgreSQL 9.x or above
- Bcryptjs
- Body-parser
- Cookie-parser
- Cookie-session
- Cors
- Debug
- Dotenv
- Express
- Morgan
- Nodemon
- Twilio
