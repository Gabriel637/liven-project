import React, { createContext, useState } from 'react'

interface IItem {
  id: string
  title: string
  price: number
  image: string
  category: string
}

interface OrderContextData {
  cartItems: IItem[]
  add: (item: IItem) => void
  remove: (item: IItem) => void
}

export const OrderContext = createContext<OrderContextData>(
  {} as OrderContextData
)

const OrderProvider: React.FC<OrderContextData> = ({ children }) => {
  const [items, setItems] = useState([])
  const add = (item: IItem) => {
    setItems([...items, item])
  }

  const remove = (item: IItem) => {
    const currentItems = items.filter(currentItem => currentItem.id !== item.id)
    setItems(currentItems)
  }

  return (
    <OrderContext.Provider
      value={{
        cartItems: items,
        remove,
        add
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
