// @ts-nocheck

export default function StructureRoleRoute(userData) {
  const role =
    userData.role.includes(" ") ? userData.role.replaceAll(" ", "-") :userData.role;
  return role;
}

