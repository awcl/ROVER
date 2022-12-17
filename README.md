# Real-time Overhead Vehicle Exchange Repository (ROVER)
## Overview
There is not a central location for government vehicles and users with a license to be tracked.  There is not an application that allows users to see what vehicles will be available for specific dates and request use.  Our application will track all information for the vehicle including maintenance, fuel, miles, recent drivers, type, number of seats, accidents/damage, plate number and parked location.  Users will contain type of license (and expiration/type), damage reports, and up-coming reservations.  CSV for overall count of vehicles and a list of reservations by date. and automate phone calls to request extended warranties.
## Table of Contents
- [Team](#team-4)
- [Running](#running)
  * [Locally](#locally)
  * [Online](#online)
- [ERD](#erd)
- [User Stories](#user-stories)
- [Wireframe](#wireframe)
- [Contributions](#contributions)
## Team 4
[@Rosslore](https://github.com/Rosslore) [@jzoeller1](https://github.com/jzoeller1) [@Teenaortega](https://github.com/Teenaortega) [@awcl](https://github.com/awcl) [@armandbringas](https://github.com/armandbringas)
## Running
### Locally
  Requires Docker, also requires patience
```bash
git clone git@github.com:awcl/ROVER.git
cd ROVER
npm run unroll
docker compose up
# once done
## non-destructive
docker compose down
## destructive
# docker compose down --volumes
# docker rmi $(docker images -a -q)
# cd .. && rm -rf ROVER
```
* [Frontend Default](http://localhost:3000/)
* [Backend Default](https://localhost:8080/)
### Online
The production application is hosted by [render](https://render.com/)
## ERD
![ERD](https://github.com/awcl/ROVER/blob/main/blueprint/ERD.png?raw=true)
## User Stories
1. As an ***user*** I should be to make a request to check out a vehicle for use
2. As an ***user*** I should be able to fill out a mishap report if a vehicle was in a accident
3. As an ***admin*** I should be able to export all of my units vehicles to CSV file
4. As an ***admin*** I should be able to approve pr deny vehicle request from users
## Wireframe
![Home](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Home.png)
![Login](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Login.png)
![Create](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Create.png)
![Available Reserved](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Available%20Reserved.png)
![MY Vehicles](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/My%20Vehicles.png)
![Queue](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Queue.png)
![Vehicle](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Vehicle.png)
![Reservation Info](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Reservation%20Info.png)
![Reserve](https://github.com/awcl/ROVER/blob/main/blueprint/wireframe/Reserve.png)
## Contributions
Please fork, then use integrated GitHub Pull Requests
