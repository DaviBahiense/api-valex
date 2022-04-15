import * as cardRepository from '../repositories/cardRepository.js'
import * as employeeRepository from '../repositories/employeeRepository.js'
import { TransactionTypes } from '../repositories/cardRepository.js';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs'
import bcrypt from "bcrypt";

export async function create(employeeId: number, type: TransactionTypes) {
    
    const employerData = await employeeRepository.findById(employeeId)
    const employerFullName = employerData.fullName
    const cardholderName = cutName(employerFullName)
    
    const numberCreditCard = faker.finance.creditCardNumber('mastercard')

    const expirationDate = formatExpirationDate();
    
    const cvcHash = bcrypt.hashSync((faker.finance.creditCardCVV()), 10);
    
    const cardData ={
        employeeId : employeeId,
        number: numberCreditCard,
        cardholderName: cardholderName,
        securityCode: cvcHash,
        expirationDate: expirationDate,
        password: null,
        isVirtual: false,
        originalCardId: null,
        isBlocked: false,
        type: type
    };
    await cardRepository.insert(cardData)
    
    if(!employerData) throw new Error("Empregado não encontrado") ;
    const verifyAlreadHaveTypeCard = await cardRepository.findByTypeAndEmployeeId(type, employeeId)
    if(verifyAlreadHaveTypeCard) throw new Error("Empregado já possui este cartão") ;
    
    function cutName(fullName:string) {
        const array = fullName.split(" ")
        
        let cutName = []
        for (let i = 0; i < array.length; i++) {
            if ( i !== array.length-1 && i !== 0 ) {
                if (array[i].length>2) {
                    cutName.push(array[i][0]) 
                }
            }
        }
        const newName = array[0] +' '+ cutName+ ' ' + (array[array.length-1])
        return newName.toUpperCase()
    }
    function formatExpirationDate() {
        const data = dayjs().format('MM/YY');
        const cut = data.split('/');
        const last = Number(cut[1]) + 5;
        const expiration = data.replace(cut[1], last as any);
        return expiration;
    }
     
}