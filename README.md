# ArchiAppTP1_2
TP1/2 of Alexandre Correia
This is a simple message app with a front and a back end.

## Description

### Frontend

Folder `TP1`, contains `index.html`, `script.js`, `style.css`

### Backend

Folder `TP2`, contains `index.js`, package files and (locally) node modules

## Local deployment

### Requirements

node & npm

### Backend

Download or clone repository

Go to TP2 directory

Install dependencies if not done yet

```
    npm install
```

Launch app

```
    npm start
```

### Frontend

Open index.html

## Online deployment

App is deployed on render, using two services :

Front : https://archiappalexandrecorreia-tp1.onrender.com

Back :  https://archiappalexandrecorreia-tp2.onrender.com

::: warning
as I use the free render plan, the back can spin down due to inactivity. It can take a minute to load and be available after being requested
:::

Click on front to use the app. The back can be used to test requests on the browser (all are GET)

## App description:

### Frontend: 

A single page that allows:
- Button for dark mode
- List of messages
- Posting a new message
- Changing backend URL access
- Delete a message

### Backend:

Availables routes, all are GET

| Route               | Description                |
|---------------------|----------------------------|
| `/`                 | Hello world route          |
| `/test/*`           | Test route                 |
| `/cpt/query`        | Get counter                |
| `/cpt/inc`          | Increment counter          |
| `/msg/get/:id`      | Get a message by ID        |
| `/msg/nber`         | Get number of messages     |
| `/msg/getAll`       | Get all messages           |
| `/msg/post/:message`| Post a message with a parameter pseudo and date |
| `/msg/del/:id`      | Delete a message by ID     |

### Message Structure

A message is a JSON object containing the following fields:

- **msg** (string): The content of the message.
- **date** (string): The date and time when the message was sent, in ISO 8601 format.
- **pseudo** (string): The username (or pseudonym) of the person who sent the message.

#### Example of a message:

```json
{
  "msg": "I love cats",
  "date": "2025-03-09T13:08:04.798Z",
  "pseudo": "Charlie"
}
```

When posting a message, the pseudo and date are sent too as parameters







