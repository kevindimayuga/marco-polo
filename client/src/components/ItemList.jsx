import { useQuery } from '@apollo/client';
import { GET_LOST_ITEMS } from '../utils/queries';

function itemList() {

   const { loading, data } = useQuery(GET_LOST_ITEMS);
  
   console.log('DATA: ', data)
   console.log('LOADING: ', loading)

  const items = data?.getItems || [];

    return (
      <div className="container">
        <h1>List of Items:</h1>
        <div className="item-container">
          {items.map((item) => (
            <div key={item._id} className="item-box">
              <div className="item-name">{item.name}</div>
              <div className="item-location">{item.location}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default itemList;