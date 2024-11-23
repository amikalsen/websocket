# Grønn Webteknologi - WebSocket chat applikasjon

Dette er en nettbasert chatapplikasjon som demonstrerer bruk av long polling for sanntidskommunikasjon. Applikasjonen bruker **Node.js**, **Express** og **Socket.IO** på backend, samt **Vue.js** på frontend.



## Forutsetninger

- [Node.js](https://nodejs.org) (versjon 14 eller nyere)
- [npm](https://www.npmjs.com/) (Node Package Manager)

---

## Kom i gang

Følg disse trinnene for å laste ned, installere avhengigheter og kjøre applikasjonen.

### 1. Klon repositoriet

```bash
git clone https://github.com/amikalsen/longpolling.git
cd longpolling
```

### 2. Installer avhengigheter

Installer nødvendige Node.js-pakker med `npm`:

```bash
npm install
```

### 3. Start applikasjonen

Du kan starte applikasjonen ved å kjøre:

- **`npm start`**: Kjører det automatiserte skriptet testApp.mjs for server og nettlesere.
- **`node server.js`**: Starter serveren manuelt uten automatisering.
- **`node testApp.mjs`**: Kjører det automatiserte skriptet for server og nettlesere direkte.


### 4. Åpne applikasjonen

Når applikasjonen kjører, åpne [http://localhost:3000](http://localhost:3000) i nettleseren for å begynne å bruke chatte-grensesnittet.

---

## Applikasjonsstruktur

- **`server.js`**: Inneholder backend-logikken for å servere statiske filer og håndtere Socket.IO-tilkoblinger.
- **`testApp.mjs`**: Automatiserer prosessen med å starte serveren og åpne nettleservinduer.
- **`index.html`**: Frontend for applikasjonen.
- **`package.json`**: Definerer avhengigheter og skript for prosjektet.

---

## Testing

Applikasjonen inkluderer automatiserte funksjoner for å:

- Starte serveren.
- Åpne flere nettleservinduer.
- Generere automatiserte meldinger for å teste WebSocket.

Applikasjonen lukker automatisk serveren og nettleservinduene etter 40 sekunder. Du kan justere denne tiden i `testApp.mjs`.

---