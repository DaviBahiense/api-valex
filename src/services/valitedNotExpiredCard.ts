import * as cardRepository from '../repositories/cardRepository.js'
import dayjs from 'dayjs';

export default async function valitadedCard(cardId:number) {
    const card = await cardRepository.findById(cardId);
    if (!card) throw new Error("Cartão não cadastrado");    
    if (dayjs().format('MM/YY') > card.expirationDate) throw Error("Cartão expirado");
    return card
}