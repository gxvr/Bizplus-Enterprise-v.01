# Note: 

- Major refactoring 
- Open to the public


# Bizplus Enterprise

Bizplus is a accounting software made with Electron, Angularjs and Sqlite to help small and large businesses managing their sales, expenses, inventory etc all under one roof. 

## Installation

Use the node package manager to install dependencies.

```bash
npm install
```

Start electron app
```bash
npm start
```

## Preview on Browser (Optional)

To preview the app on browser you need to install  [http-server](https://www.npmjs.com/package/http-server) then on app directory run

```bash
http-server
```

**Note**: Some functionalities won't be available to preview on the browser as they are available on electron only. Use browser when you want to test or make changes to codes.



## Database

Connection to the sqlite database is found on dbService file found inside services folder

```javascript
"USE STRICT";
app.factory("dbService", function ($http) {
    var sqlite = require('sqlite-sync');
    var db = sqlite.connect('model/database.db');
    return db;
});

```

## Technologies
- AngularJS
- NodeJS
- SQlite 3
- ElectronJS
- HTML/JS/CSS


## Checklist
- SPA Approach - Since we want to achieve look and feel of native app, content must be generated dynamically on the existing page itself. Angularjs/Vuejs are great on this type of approach

- Follow Microsoft Desktop Design Guidelines >>> https://docs.microsoft.com/en-us/windows/win32/uxguide/guidelines for Windows

- Optimization ~ Browser Caching & Code bundling (lot of it..I guess)  

- Smooth animations (Transitions, Button clicks, Awaiting time etc.) to match that of native desktop application

- Prevent browser options (Text selection, right clicking etc.)

- Follow native pixel measuremements


## Contributing
For major changes, open an issue first to discuss what you would like to change.

## Bug / Feature Request

If you find a bug, open an issue with your expected result.

## Todo

- Invoice.
- Profit & Loss reporting
- Update Multilanguage support.
- Optimize SQL database
- Addons support (Future)
- Photo upload
- etc.


## License
Do whatever you see fit
