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
  ];
  return <UsersList items={USERS} />;
};

export default Users;
