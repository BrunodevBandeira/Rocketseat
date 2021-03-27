//import express, { response } from 'express';
import 'reflect-metadata'
import express from "express";
import "./database" ;
const app =  express();


//request = é tudo aquilo que estamos recebendo.
//responde = é tudo aquilo que estamos enviando.
/*
   GET = BUSCA
   POST = SALVA
   PUT = ALTERA
   DELETE = APAGAR
   PATCH = ALTERAÇÃO ESPECIFICA
*/


// Entenda o GET como a rota(Recurso API)
app.get("/users", (request, response) => {
    //return response.send("Hellow word - NLW04");
    return response.json({ message: "Hello World - NLW04"});
});

// Entenda o POST como request, response 

app.post("/", ( request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso!"});
});

app.listen(3310, () => console.log("Server is running"));