import React, { useState, useEffect, Children } from 'react'
import CardItem from './item/CardItem'
import Datepicker from '../../components/Datepicker'
import apiFetch from '../../axios/config'


function Cards() {
  
  const[referenceDate, setReferencedate] = useState(new Date)

  const handleChange = (selectedDate) => {
    setReferencedate(selectedDate)
  }

  const [cards, setCards] = useState([])

  const getCards = async () => {

    try {
      const response = await apiFetch.get("cards/allCardsActive")
      const content = response.data.content
      setCards(content)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCards()
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='flex bg-gradient-to-t from-gray-800 to-transparent shadow-gray-900 dark:shadow-gray-500 shadow-lg mt-5 py-7 items-center justify-around uppercase font-bold text-sm '>
        <h1 className='uppercase dark:text-gray-200 sm:text-2xl'>Cartões</h1>
        <div className='flex flex-col items-center'>
          <span className='dark:text-gray-200'>Data referência</span><Datepicker handleChange={handleChange} />
        </div>
      </div>
      <div className='flex flex-col items-center mt-7 gap-3'>
        {cards.length === 0
          ?
          <div >
            <span>Carregando... </span>
          </div>
          : (
            <div className="grid gap-7 sm:mt-5 mt-5 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
              {cards.map((card) => (
                <CardItem card={card} key={card.id} referenceDate={referenceDate}/>
              ))}
            </div>
          )}
      </div>
    </div>

  )
}

export default Cards