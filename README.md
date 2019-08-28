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

Connection to the sqlite database is achieved using dbService 

```javascript
"USE STRICT";
app.factory("dbService", function ($http) {
    var sqlite = require('sqlite-sync');
    var db = sqlite.connect('model/database.db');
    return db;
});

```

## Contributing
For major changes, open an issue first to discuss what you would like to change.

## Bug / Feature Request

If you find a bug, kindly open an issue here with your expected result.

## Todo

- Invoice.
- Profit & Loss reporting
- Update Multilanguage support.
- Optimize SQL database
- Addons support (Future)
- Photo upload
- etc.


## License
[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)
