import {useState} from 'react';

function SelectPayment() {
  const [payment,setPayment]=useState('Cash')

  function changePayment(e) {
    setPayment(e.target.value)
  }

  return (
    <div>
      <p>Payment</p>
      <p><select value={payment} onChange={changePayment} name="payment">
      <option value="Cash">Cash</option>
      <option value="Cash">Credit Card</option>
      <option value="Cash">Check</option>
      </select></p>
    </div>
  );
}

export default SelectPayment;