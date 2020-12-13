Andrei Ungureanu
andrei090498@gmail.com

Vertigo Studio Front-end Internship



Preview:
Proiectul a fost creat utilizând utilitarul Create-React-App.
Pentru pornirea proiectului se rulează comanda npm start în folderul proiectului.

Structura principală (src):

  

App.js conține combinarea tuturor componentelor pentru funcționarea corectă a proiectului. Practic este fișierul de bază în care se face import la  celelalte componente.
În aux_layouts am plasat componenta responsabilă de fereastra pop-up.
În layout_cells am păstrat layout-ul pentru cele 2 celule: celula pentru pagina principală (MainCell.js) și celula pentru fereastra pop-up (PopupCell.js).
În listeners am păstrat funcția pentru închiderea ferestrei pop-up cu tasta Esc.
Fișierul css se găsește în folderul styles.
Restul fișierelor sunt by default din structura aplicației Create-React-App.

Implementare:

  Pentru implementarea acestui proiect am folosit Functions and Hooks, așa cum scrie în cerință. Am făcut o mică abatere de la cerința pentru stabilirea dimensiunii în lățime a containerului și l-am făcut mai mare pentru că așa mi s-a părut că arată mai ok.
Am păstrat design-ul cerut, modificand pe alocuri unele elemente cum ar fi border radius.
Pentru inchiderea ferestrei pop-up, închiderea se poate face cu butonul X, care apare în marginea superioară a imaginii pop up și are un efect interesant atunci cand se face hover sau tastând ‘Escape’. Pentru stiluri, am utilizat CSS, toate stilurile fiind definite în App.css.

Pagina web este responsive și se redimensionează în funcție de dimensiunea ecranului. Un feature adăugat constă în faptul că pentru ecrane mici (smartphones), layout-ul de 2 coloane se transformă în un layout de o coloana pentru a păstra calitatea fiecărui element și un aspect mai elegant și compact.






