import { CreditCardIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {

 function formatterDate(dt){
   
    return `${dt.substring(8,10)}/${dt.substring(5,7)}`
 }
 
    return (
        <div className=' p-4  rounded-3xl bg-gradient-to-r from-gray-600  shadow-gray-900 dark:shadow-gray-500 shadow-lg sm:hover:scale-110'>
            <Link to={`/transactions/${props.card.id}`}>
                    <div className='flex items-end dark:text-gray-200 justify-between uppercase border-gray-700  border-b-2 dark:border-gray-200 font-bold text-sm'>
                        <CreditCardIcon className='h-8' />
                        <span >{props.card.nameCard}</span>
                    </div>
                    <h2 className='text-center uppercase my-3 text-red-800 dark:text-emerald-400 font-extrabold text-xl'>{props.card.owner}</h2>
                    <div className='flex justify-between gap-3 font-semibold text-lg dark:text-gray-200'>
                        <span>Vencimento</span>
                        <span> - Limite - </span>
                        <span>Melhor dia</span>
                    </div>
                    <div className='flex justify-between gap-3 dark:text-gray-200 font-semibold'>
                        <h3 >{formatterDate(props.card.dateExpiration)}</h3>
                        <h3 >{props.card.limitCard.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
                        <h3 >{formatterDate(props.card.bestBuyDate)}</h3>
                    </div>
            </Link>
        </div>
    )
}

export default CardItem