import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export default function useOrders() {
  const context = useContext(OrderContext);
  
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  
  return context;
}
