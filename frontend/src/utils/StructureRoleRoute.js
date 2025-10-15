// @ts-nocheck

export default function StructureRoleRoute(userData) {
  const role =
    userData.role.includes(" ") ? userData.role.replaceAll(" ", "-") :userData.role;
  return role;
}

// import { useUserData } from "../../context/UserDataContext";
// import StructureRoleRoute from "../../utils/StructureRoleRoute";

// const { UserData } = useUserData();

// const [role, setrole] = useState(null);

// useEffect(() => {
//   if (UserData) {
//     const rl = StructureRoleRoute(UserData);
//     rl && setrole(rl);
//   }
// }, [UserData]);
