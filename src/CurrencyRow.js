import React from 'react'

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    keySuffix 
  } = props

  const uniqueKey = `currensy-row-${keySuffix}`
  return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={`${uniqueKey}-${option}`} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}