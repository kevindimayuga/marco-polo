export default function itemList({ items }) {
    return (
      <div className="container">
        <h1>List of Items:</h1>
        <ul className="list-group">
          {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
          {items.map((items) => (
            <li className="list-group-item" key={items.login.uuid}>
              {`${items.name}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }