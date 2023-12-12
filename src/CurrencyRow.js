// CurrencyRow.js
import React from 'react';
import { connect } from 'react-redux';
import {
  setToCurrency,
  setAmount,
} from './redux/actions';

function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div>
      <input type="number" className="input" value={amount} onChange={(e) => onChangeAmount(e.target.value)}/>
      <select value={selectedCurrency} onChange={(e) => onChangeCurrency(e.target.value)}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currencyOptions: state.currencyOptions,
  selectedCurrency: state.toCurrency,
  amount: state.amount,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCurrency: (value) => dispatch(setToCurrency(value)),
  onChangeAmount: (value) => dispatch(setAmount(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyRow);
