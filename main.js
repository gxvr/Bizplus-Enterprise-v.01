const electron = require('electron');
const url = require('url');
const path = require('path');
const {
    app,
    BrowserWindow,
    dialog,
    Menu,
    Tray,
    ipcMain
} = electron;
let mainWindow;
let aboutWindow;
let whatWindow;
let splashWindow;
let ExWindow;

app.on('ready', function () {

    //Tray
    tray = new Tray('views/assets/icons/app/icon.ico')
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Display',
            click: () => {
                mainWindow.show()
            }
        },
        {
            label: 'About Bizplus Enterprise 2019',

        },
        {
            label: 'Exit',
            click: () => {
                mainWindow.destroy()
                app.quit()
            }
        }
  ])
    tray.setToolTip('Bizplus Enterprise 2019')
    tray.setContextMenu(contextMenu)

    //Create new window
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 768,
        minWidth: 1080,
        minHeight: 768,
        center: true,
        show: false, // don't show until splash screen finishes
        title: 'Bizplus Enterprise 2019',
        icon: path.join(__dirname, 'views/assets/icons/app/icon.ico'),
        webPreferences: {
            nodeIntegration: true
        }
    });

//        mainWindow.webContents.openDevTools();//Create splash window
    splashWindow = new BrowserWindow({
        width: 590,
        height: 300,
        minWidth: 590,
        minHeight: 300,
        transparent: true,
        frame: false,
        maximizable: false,
        center: true,
        alwaysOnTop: true,
        icon: path.join(__dirname, 'views/assets/icons/app/icon.ico')

    });
    //Load Splash HTML File
    splashWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'splashWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Load Main HTML File
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // if main window is ready to show, then destroy the splash window and show up the main window
    mainWindow.once('ready-to-show', function () {
        splashWindow.destroy();
        mainWindow.show();
        mainWindow.maximize();

    });

    //Garbage collection
    mainWindow.on('closed', function () {
        mainWindow = null
    });


    //Initialize Alert Message on App Quiting
    mainWindow.on('close', (event) => {
        event.preventDefault()
        let options = {}
        options.type = "question"
        options.buttons = ["&Yes", "&Cancel"]
        options.defaultId = 2
        options.title = "Quit"
        options.message = "Do you really want to quit?"
        options.detail = "Any process not saved will be lost. Click Yes if you wish to proceed"
        //options.icon = "/path/image.png"
        options.cancelId = 2
        options.noLink = true
        options.normalizeAccessKeys = true

        dialog.showMessageBox(mainWindow, options, (res, checked) => {
            if (res === 0) {
                mainWindow.destroy();
                app.quit();
            } else if (res === 1) {} else if (res === 2) {}
        })
    });

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(menuBar);
    //Insert menu
    Menu.setApplicationMenu(mainMenu);
});

//Handle AboutWindow
function createAboutWindow() {
    //Create about window
    aboutWindow = new BrowserWindow({
        width: 500,
        height: 400,
        minWidth: 500,
        minHeight: 400,
        title: 'About',
        minimizable: false,
        maximizable: false,
        center: true,
        icon: path.join(__dirname, 'views/assets/icons/app/icon.ico')

    });
    //Load HTML File
    aboutWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'aboutWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Garbage collection
    aboutWindow.on('closed', function () {
        aboutWindow = null;
    });
    aboutWindow.setMenu(null);
}



//Handle createWhatWindow
function createWhatWindow() {
    //Create what's new  window
    whatWindow = new BrowserWindow({
        width: 600,
        height: 540,
        minWidth: 600,
        minHeight: 540,
        title: "What's New",
        minimizable: false,
        maximizable: false,
        center: true,
        icon: path.join(__dirname, 'views/assets/icons/app/icon.ico')

    });
    //Load HTML File
    whatWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'whatWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Garbage collection
    whatWindow.on('closed', function () {
        whatWindow = null;
    });
    whatWindow.setMenu(null);
}



//Handle  createExWindow
function createExWindow() {
    //Create expire window
    ExWindow = new BrowserWindow({
        width: 630,
        height: 540,
        minWidth: 630,
        minHeight: 540,
        maxWidth: 630,
        maxHeight: 540,
        title: 'Licence Expired',
        minimizable: false,
        maximizable: false,
        center: true,
        alwaysOnTop: true,
        icon: path.join(__dirname, 'views/assets/icons/app/icon.ico')

    });
    //Load HTML File
    ExWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'exWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    //Garbage collection
    ExWindow.on('closed', function () {
        aboutWindow = null;
    });
    ExWindow.setMenu(null);
}



// Menu bar
const menuBar = [{
        //File
        label: ' F̲ile',
        submenu: [
            {
                label: 'B̲ack Up Company',
            }
            , {
                label: 'C̲reate Copy...',
            }
            , {
                type: 'separator'
            }
            , {
                label: 'U̲tilities',
            }
            , {
                label: 'Sync',
            }
            , {
                type: 'separator'
            },

            {
                label: 'Q̲uit Bizplus',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        , ]
    },

    //View
    {
        label: 'V̲iew',
        submenu: [
            {
                label: 'Keyboard Shortcuts',
                accelerator: process.platform == 'darwin' ? 'Command+K' : 'Ctrl+K',

            },

            {
                type: 'separator'
            },

            {
                role: 'togglefullscreen'
            }
            , {
                role: 'reload'
            },

        ]
    }
        , //Tools
    {
        label: 'Add-ons',
        submenu: [

            {
                label: 'Expense Calculator'
            },

            {
                label: 'Sales Calculator'
            },
            {
                label: 'Point of Sale (POS)'
            }
        , ]
    },

    //Help
    {
        role: 'help',
        submenu: [{
                label: 'B̲izplus Help',
                accelerator: process.platform == 'darwin' ? 'F1' : 'F1',
            },

            {
                label: 'Visit O̲nline Help',
                click() {
                    require('electron').shell.openExternal('https://electronjs.org')
                }
            },

            {
                type: 'separator'
            },

            {
                label: "✓ W̲hat's New",
                click() {
                    createWhatWindow();
                }
            },

            {
                type: 'separator'
            },

            {
                label: 'B̲izplus Learning Tutorials',
                click() {
                    require('electron').shell.openExternal('https://electronjs.org')
                }
            },

            {
                label: 'F̲ind A Local Bizplus Expert',
                click() {
                    require('electron').shell.openExternal('https://electronjs.org')

                }
            },


            {
                type: 'separator'
            },

            {
                label: 'U̲pdate Bizplus...',
                click() {
                    createExWindow();
                }
            },

            {
                type: 'separator'
            },

            {
                label: 'About B̲izplus Enterprise 2019',
                click() {
                    createAboutWindow();
                }
            },

            {
                type: 'separator'
            }
            , {
                label: 'Bizplus H̲omepage',
                click() {
                    require('electron').shell.openExternal('https://electronjs.org')
                }
            },

        ]
    }



];
