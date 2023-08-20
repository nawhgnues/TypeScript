import axios, { AxiosResponse } from "axios";

//interface

interface Geo {
  lat: String;
  lng: String;
}

interface Address {
  city: String;
  geo: Geo;
  street: String;
  suite: String;
  zipcode: String;
}

interface Company {
  bs: String;
  catchPhrase: String;
  name: String;
}

interface User {
  address: Address;
  company: Company;
  email: String;
  id: Number;
  name: String;
  phone: String;
  username: String;
  website: String;
}

//fetch api
const users: Object[] = [];
const res: AxiosResponse = await axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => data);

res.data.map((data: User) =>
  users.push({
    address: {
      city: `${data.address.city}🏠`,
      geo: {
        lat: data.address.geo.lat,
        lng: data.address.geo.lng,
      },
      street: data.address.street,
      suite: data.address.suite,
      zipcode: data.address.zipcode,
    },
    company: {
      bs: data.company.bs,
      catchPhrase: data.company.catchPhrase,
      name: data.company.name,
    },
    id: data.id,
    name: `${data.name}🤍`,
    username: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
  })
);

console.log(users);
