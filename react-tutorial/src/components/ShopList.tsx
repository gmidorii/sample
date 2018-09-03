import * as React from "react"

export interface ShopListProps {
  name: string
}

export const ShopList = (props: ShopListProps) => {
  return (
    <div className='shopping-list'>
      <h1>Shopping List for {props.name} </h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  )
}