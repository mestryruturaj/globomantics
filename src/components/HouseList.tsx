interface HouseList {
  id: number;
  address: string;
  country: string;
  price: number;
}

const houseList: HouseList[] = [
  {
    id: 1,
    address: "123 Main St",
    country: "USA",
    price: 500000,
  },
  {
    id: 2,
    address: "456 Elm St",
    country: "Canada",
    price: 600000,
  },
];

function HouseList(): React.JSX.Element {
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {houseList.map((house) => (
            <tr key={house.id}>
              <td>{house.address}</td>
              <td>{house.country}</td>
              <td>{house.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default HouseList;
