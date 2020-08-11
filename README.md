This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install` and `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Opdracht beschrijving

1. Maak een LightProvider.js bestand aan
2. Creeer in dit bestand een LightContext met `createContext`
3. Creer daarna een leeg LightProvider component
4. Zorg dat onderaan het bestand zowel de LightProvider en de LightContext worden geexporteert
5. Zorg dat het LightProvider component het volgende doet:
    - dit component moet de property `children` kunnen ontvangen
    - dit component geeft als return value een `<LightContext.Provider>` element terug waarin de children gerenderd worden
6. Maak in dit component een stukje state aan waarin we de waarde van het licht (aan/uit => true/false) op kunnen slaan: `lightStatus`
7. Geef `lightStatus` mee aan de `<LightContext.Provider>` zodat hij voor andere componenten beschikbaar wordt
8. Geef ook de setter functie van `lightStatus` mee
9. Importeer de LightProvider in App.js en wikkel hem om de componenten
10. Implementeer de LightContext in LightSwitch.js door daar een context te creeren met `createContext` en de setter functie in de OnClick te gebruiken
11. Implementeer de LightContext in Status.js door daar een context te creeren met `createContext` en de `lightStatus` te gebruiken om het woordt 'Aan' en 'Uit' conditioneel te renderen

