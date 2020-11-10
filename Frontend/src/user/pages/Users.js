import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mathew George",
      image:
        "https://i.picsum.photos/id/297/800/800.jpg?hmac=3NVy1Y0XxEhVtCRqa3lHrfumNXbGPB8cz0HeJmjOyNw",
      places: 3,
    },
    {
      id: "u2",
      name: "John Doe",
      image:
        "https://i.picsum.photos/id/445/800/800.jpg?hmac=xfeRj__e_T3gSpsqv7J4IfuIQDHH45_b6oHi-v5XxjA",
      places: 5,
    },
    {
      id: "u3",
      name: "Sid Ahamed",
      image:
        "https://i.picsum.photos/id/878/800/800.jpg?hmac=M8QbwpfhvSr_QOm6r36YG_D6DxwehkMquihN6ZqCtOA",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
