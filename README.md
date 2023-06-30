# Counter 
### <sub>*Inspirated by The Hobbit*</sub>

Progetto realizzato per il corso Front End Development di [Start2Impact Univerity](https://www.start2impact.it/master/), argomento "JavaScript Basics". Il progetto consiste nel creare una semplice applicazione che funzioni come un contatore. Sviluppare un'applicazione JavaScript che consenta all'utente di aumentare e diminuire il valore del contatore. Non appena l'utente entra nella pagina, vedrà 0 come valore del contatore e avrà a disposizione tre pulsanti "-", "reset" e "+" per modificare il valore del contatore. Quando si preme il tasto "+" o "-" il contatore si incrementa  o decrementia di un'unità corrispondente facendo comparire una scopa che vola dal basso verso l'alto nel caso del "+" e dall'alto verso il basso nel caso del "-". Se premuto il pulsante di ripristino, le scope in corso di animazione scompaiono e il numero del contatore ritorna al punto di partenza, cioè lo "0". L'applicazione deve essere sviluppata con JavaScript, non è consentito l'utilizzo di Jquery e di qualsiasi framework (React, Angular, Vue...). È consentito l'uso, se necessario, di librerie JavaScript esterne. I pulsanti +/- e anche la visualizzazione del valore del contatore devono essere implementati con JavaScript. Sono consentite tutte le funzionalità aggiuntive ritenute necessarie.

Visto che questo progetto ormai è stato svlippuato tante volte, ho pensato di fare qualcosa di diverso dal classico contatore, implementato ad esso qualche animazione e suono. Ho deciso di basare il progetto su di una saga molto nota e della quale me ne sono letteralmente innamorato fin da questo è uscita, **Harry Potter**. 

Percorso tecnico:

Ho ricrerato alcuni elementi, come quelli dei pulsanti, utilizzando delle immagini trovate su vari siti e apportandogli modifiche utilizzando Procreat.

Il design dei pulsanti è molto semplice, ho deciso di focalizzarmi un pò di più sull'animazione delle scope e la musica di ogni pulsante.

La scopa e le figure di Harry ed Ermione utilizzate sono dei png. Essi vengono richiamati sia quando si clicca sul "+" che sul "-" utilizzando per ognuno dei pulsanti delle specifiche proprietà css che gli consentono di cambiare posizione , animazione e l'angolazione dell'immagine.

La figura di Voldemort invece viene richiamata quando si preme sul tasto "reste", questo tasto oltre a riportare il contatore a 0 ha la funzione di stoppare nell'immediato anche le animazioni dei tasti "+" e "-".

la funzione dei pulsanti viene disabilitata una volta premuti in modo tale da permettere il completamento dell'animazione 

Ho aggiunto una musica di sottofondo in auto-play per i browser che hanno l'impostazione abilitata, mentre per quelli che non l'avessero c'è la possibilità di mettere in play la musica grazie al controller presente sul fondo della pagina. Ma l'aggiunta dei suoni specifici per ogni tasto è stato un qualcosa alla quale ho pensato dopo, prendendo spunto dal progetto di un'altro utente della comunity di [Start2Impact Univerity](https://www.start2impact.it/master/), così ho deciso di implementare le funzioni dei tre tasti aggiungendogli la voce dei protagoniti della saga, mentre invocano delle magie specifiche. 

Il font è stato tra le scelte più difficili, in quanto doveo riuscire a trovare qualcosa di particolare presente in tutti i film della saga, ma senza utilizzare immagini che richiamassero alla figura principale dei personaggi. Ma in fine ho scelto di fornire al progetto più font e di permettere al browser di scegliere quale utilizzare in base alla risoluzione dei dispositivi sulla quale si visualizza il sito.

Nel processo della creazione di questo progetto, ho incontrato qualche difficoltà inizialmente, che poi ho risolto grazie a consigli sul materiale da studiare. Sono fiero di aver creato qualcosa di originale in totale autonomia, seguendo un'idea precisa data dalla traccia dell'esercizio ma anche lasciandomi guidare da ispirazione e tentativi.

### [Linkedin](https://www.linkedin.com/in/ciro-balzano-4561661b8/)

### [Portfolio](https://miraitsukigames.github.io/)

Link al progetto:
### [Counter The Hobbit](https://cirobalzano.github.io/Counter/)


Screenshot:
### *Questa è la modalità con quale si visualizza da desktop:*
![Questa è la modalità con quale si visualizza da desktop](/assets/img/screenshot1.png)
### *Questa è la modalità con la quale si visualizza da tablet o smarphone in landscape:*
![Questa è la modalità con la quale si visualizza da tablet o smarphone in landscape](/assets/img/screenshot2.png)
### *Questa è la modalità con la quale si visualizza da smartphone in portrait:*
![Questa è la modalità con la quale si visualizza da smartphone in portrait](/assets/img/screenshot3.png)
