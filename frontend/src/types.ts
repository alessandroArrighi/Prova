export interface Montatura {
    Modello: string
    Brand: string
    Prezzo: number
    Versione: string
    Calibro: string
    Ponte: string
    Aste: string
    Materiale: string
    Colore: string
    Immagine: string
    NewModello: string
}

export interface LAC {
    Modello: string
    Brand: string
    Prezzo: number
    Durata: string
    Fascia: string
    Focale: string
    NewModello: string
    Categoria: string
}

export interface User {
    IDUtente: number
    User: string
    Role: "admin" | "user"
}

export interface Ordine {
    IDProdotto: string
    Categoria: string
    Quantità: number
    Prezzo: number
    Immagine: string
}

export interface Utente {
	IDUtente: number
    User: string 	
    Password: string
    Nome: string
    Cognome: string 	
    Mail: string 	
    Telefono: number 	
    Indirizzo: string 
    Role: "admin" | "user" 	
}

export interface nuoviDatiUtente {
    User: string 	
    Nome: string
    Cognome: string 	
    Mail: string 	
    Telefono: number 	
    Indirizzo: string
}