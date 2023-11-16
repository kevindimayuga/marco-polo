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
        <ul className="list-group">
          {/* {console.log("HERE: ", items.addFoundItem?.length)} */}
          {/* Here we use the map method to iterate through each item and return a new array of listed items*/}
          {items.map((item) => (
            <li className="list-group-item" style={{ listStyleType: 'none' }} key={item._id}>
              <div>{`${item.name}`}{`${item.location}`}</div>
              {/* {`${item.description}`}
              {`${item.category}`} */}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default itemList;