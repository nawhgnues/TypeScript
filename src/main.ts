import axios, { AxiosResponse } from "axios";

//interface
interface User {
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
    id: data.id,
    name: `${data.name}!`,
    username: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
  })
);

console.log(users);
