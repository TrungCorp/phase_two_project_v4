# KYOTO BATTLE APP

## Description
This app is a sort of mini game which contains 3 routes, the Home,PlayerForm and Battle page.
On the Home page you can view players from restful server and click on the names for additional info.
On the Form page you can add a new player to the restful server via POST request. 
The Battle page contains a mini game where when you click the 'Battle' button it pairs two random players from
the server and have them 'fight' and whoever's total attack is higher wins.

## Installation
 To create a react project do:
 ```
 npx create-react-app my-app
```
Adding react-router:

```
npm install react-router-dom@6
```


## Contents
This projects uses :
### -react
### -react-router-dom

## Usage

### npm start

This command runs the app in developement mode.
The url to view the page is 'http://localhost:3000' 

### json-server --watch db.json --port 3001

This commands runs restful server at port 3001


