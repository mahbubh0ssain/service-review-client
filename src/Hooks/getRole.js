import { useState } from "react";

export const useRole = (email) => {
  const [role, setRole] = useState(false);
  fetch(`${process.env.REACT_APP_URL}/user?email=${email}`, {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.result?.role === "admin") {
        setRole(true);
      }
    });
  return role;
};
