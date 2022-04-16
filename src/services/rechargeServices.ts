import * as rechargeRepository from '../repositories/rechargeRepository.js'
import { RechargeInsertData } from '../repositories/rechargeRepository.js';
import dayjs from 'dayjs';
import valitadedCard from './valitedNotExpiredCard.js';

export async function create(cardId:number, amount:number) {

    if(amount < 0 || amount === 0) throw new Error("Valor precisa ser maior que zero");
    const card = await valitadedCard(cardId)
    

    const rechargeData : RechargeInsertData = {cardId, amount}

    await rechargeRepository.insert(rechargeData)
    
}
