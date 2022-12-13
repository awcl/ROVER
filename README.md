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
docker compose up
# once done
docker compose down
```
* [Frontend Default](http://localhost:3000/)
* [Backend Default](https://localhost:8080/)
### Online
The production application is hosted by [render](https://render.com/)
## ERD
![ERD](https://github.com/awcl/ROVER/blob/main/blueprint/ERD.png?raw=true)
## User Stories
1. As an ***inventory manager*** I want to be able to create an account so that I can track my inventory.
    - The user credentials must be salted and hashed before being stored.
2. As an ***inventory manager*** I want to be able to log into my account so that I can see my inventory of items.
    - After logging in, the inventory manager should be redirected to their inventory of items.
3. As an ***inventory manager*** I want to be able to create a new item so that I can share my item details with the world.
    - After the item is created, the inventory manager should be redirected to their inventory of items.
    - An item displays name, description, and quantity.
4. As an ***inventory manager*** I want to be able to see my entire inventory of items.
    - The inventory of items should display the first 100 characters of each item description, with “...” at the end if the description is longer than 100 characters.
5. As an ***inventory manager*** I want to be able to see any individual item I have added.
    - The full item information should be displayed.
6. As an ***inventory manager*** I want to be able to edit an item so that I can fix any mistakes I made creating it.
    - When the user toggles edit mode, the page remains the same and the fields become editable.
7. As an ***inventory manager*** I want to be able to delete an item so that I can remove any unwanted content.
When the user deletes the item they should be redirected to their inventory of items.
8. As a ***visitor***, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.
    - Unauthenticated users should be able to view all items, and any single item.
    - The items should only display the first 100 characters of its description with “...” at the end if it is longer than 100 characters.
9. As a ***visitor***, who is not logged in, I want to be able to view a specific item created by any user so that I can see all of its details.
   - Unauthenticated users should be able to view all items, and any single item.
10. As an ***inventory manager*** I want to be able to view all items created by every inventory manager so that I can browse every item.
    - Unauthenticated users should be able to view all items, and any single item.
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
