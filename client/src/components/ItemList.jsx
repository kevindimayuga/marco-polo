export default function itemList({ item }) {
    return (
      <div className="container">
        <h1>List of Items:</h1>
        <ul className="list-group">
          {/* Here we use the map method to iterate through each item and return a new array of listed items*/}
          {item.map((item) => (
            <li className="list-group-item" key={items.login.uuid}>
              {`${items.name}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }