// src/mocks/node.js
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'
 
export const worker = setupWorker(...handlers)

//Zadanie, stwórz nowy komponent, który wykona zapytanie do api https://example.com/user i wyswietli odczytane dane

