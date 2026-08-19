# Pericle — motivatore per il lavoro e la cura di sé

App web mobile in italiano: un assistente che ti spinge a partire, ti tiene l'agenda e i memo,
e ti ricorda di mangiare, respirare e staccare. Nessun account, nessun server: tutto gira nel telefono.

## Cosa fa

- **Oggi** — segni come stai adesso e il tono di Pericle cambia di conseguenza (dolce, ironica, esigente, complice, calma); avatar scelto da te, prossimo impegno, le tre cose della giornata.
- **Agenda** — settimana modificabile: aggiungi, cambia ora e testo, spunta, elimina. Sotto, i **memo** con "ricordamelo".
- **Sblocca** — quattro tipi di blocco (iniziare, chiamate, campo, burocrazia), tre passi concreti, il patto dei 5 minuti e il respiro guidato 4-7-8.
- **Cura** — pause dallo schermo, abitudini, chiusura di giornata con diario.
- **Pericle** — chat con risposte rapide e messaggio vocale (simulato in questa versione).
- **Voce** — Pericle parla davvero con le voci italiane di Android: due timbri (donna calda e bassa, uomo serio e grave), scelta della voce esatta fra quelle installate, interruttore per spegnerla.
- **Chat con Claude** — le risposte sono generate al momento da Claude (modello Haiku), nel tono scelto e a conoscenza di agenda, memo, cose da fare e umore del giorno; se non risponde (offline, limite raggiunto) torna in automatico alle risposte pronte per categoria.
- **Installazione** — pulsante "Installa Pericle" su Android; su iPhone, Condividi → Aggiungi alla schermata Home.

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

## Voci su Android

L'app usa le voci di sistema. Per averle buone:

1. Play Store → **Sintesi vocale di Google** (`com.google.android.tts`), di solito già installata.
2. Impostazioni → **Accessibilità** → **Sintesi vocale** (Samsung: Accessibilità → Miglioramenti per l'udito → Sintesi vocale).
3. Motore **Sintesi vocale di Google** → ingranaggio → **Installa dati vocali** → **Italiano** → scarica tutte le voci.
4. Le voci `it-it-x-itb` e `it-it-x-itc` sono maschili e gravi; `it-it-x-itd` e `it-it-x-kda` femminili.
5. In Pericle: **Cura → Voce** → scegli il timbro e la voce esatta.

## Installazione su Android

Chrome: menu ⋮ → **Aggiungi a schermata Home** → **Installa**. In alternativa il pulsante
**Installa Pericle** in *Cura → Installa sul telefono* compare quando il browser lo consente.

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
- Il vocale in chat è una simulazione: manca l'accesso al microfono (la voce in uscita invece è reale).
- I promemoria non arrivano ancora come notifiche di sistema.

## Licenza

MIT — vedi `LICENSE`.
