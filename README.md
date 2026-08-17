# Pericle — motivatore per il lavoro e la cura di sé

App web mobile in italiano: un assistente che ti spinge a partire, ti tiene l'agenda e i memo,
e ti ricorda di mangiare, respirare e staccare. Nessun account, nessun server: tutto gira nel telefono.

## Cosa fa

- **Oggi** — segni come stai adesso e il tono di Pericle cambia di conseguenza (dolce, ironica, esigente, complice, calma); avatar scelto da te, prossimo impegno, le tre cose della giornata.
- **Agenda** — settimana modificabile: aggiungi, cambia ora e testo, spunta, elimina. Sotto, i **memo** con "ricordamelo".
- **Sblocca** — quattro tipi di blocco (iniziare, chiamate, campo, burocrazia), tre passi concreti, il patto dei 5 minuti e il respiro guidato 4-7-8.
- **Cura** — pause dallo schermo, abitudini, chiusura di giornata con diario.
- **Pericle** — chat con risposte rapide e messaggio vocale (simulato in questa versione).

## Come si prova in locale

Serve un piccolo server web (i file non funzionano aperti con doppio clic, per via del service worker):

```bash
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Pubblicare su GitHub Pages

Settings → Pages → Branch: `main`, cartella `/ (root)` → Save.
Dopo un minuto l'app è su `https://<utente>.github.io/<repo>/`.
Aprila dal telefono e usa "Aggiungi alla schermata Home": si installa come app, a schermo intero.

## Struttura

| File | Cosa è |
| --- | --- |
| `index.html` | L'app: interfaccia e logica |
| `support.js` | Runtime dei componenti |
| `ios-frame.jsx` | Cornice iPhone usata per l'anteprima |
| `image-slot.js` | Riquadro immagine |
| `_ds/broadsheet-*/` | Design system Broadsheet (stili e componenti) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Installazione come app e funzionamento offline |

## Stato e limiti

- Avatar e testi salvati sul telefono (localStorage); agenda e memo vivono nella sessione: il passo successivo è salvarli anch'essi.
- Il vocale in chat è una simulazione: manca l'accesso al microfono.
- I promemoria non arrivano ancora come notifiche di sistema.

## Licenza

MIT — vedi `LICENSE`.
