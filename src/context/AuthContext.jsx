import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userPrinciple) => {
    delete userPrinciple?.password;
    setUser({
      name: "Aman Tiwari",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQF6Jg0zTVWBzQ/profile-displayphoto-scale_200_200/B56ZjazRsiH8Ac-/0/1756017532600?e=2147483647&v=beta&t=ZjjwETYcdYZ464B7MlBjEaAzoNvkmWwalikR8gYsnUE",
      email: "amantiwari8861@gmail.com",
      ...userPrinciple,
    });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextWrapper;
export { AuthContext };
