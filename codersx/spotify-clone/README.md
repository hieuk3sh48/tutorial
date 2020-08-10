* User authentication(firebase)
* Spotify API
* Responsive design
* Material UI (icons)
* React Context API (like REDUX)
* React Hooks Functional

* Spotify API
    spotify developer
    DASHBOARD
    CREATE AN APP
    EDIT SETTING
        Redirect URIs
            http://localhost:3000/
    spotify.js
         1.Click Login button
         2.Redirect to SPOTIFY login page
         3.Redirect to home page once logged in
    npm i spotify-web-api-js
    
* Components
    Login
    Player
        Sidebar
            SidebarOption
        Body
            Header
            SongRow
        Footer

* React Context API
    DataLayer.js
        DataLayerContext // createContext()
        DataLayer // <DataLayerContext.Provider>
        useDataLayerValue // useContext(DataLayerContext)
    Reducer
        reducer.js