import { useUpdateUserMutation } from "@/redux/api/userAPI";
import { useState } from "react";

export const useClickedData = () => {
  const [updateUser] = useUpdateUserMutation();
  const [clickedData, setClickedData] = useState(null);

  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleDataClick = (data: any) => {
    const { id } = data;
    // Perform any additional logic here if needed
    console.log(data, "hook data");
    console.log(selectedRole, "selected user role");
    console.log(selectedRole);

    setClickedData(data);
    updateUser({ id });
  };

  return {
    clickedData,
    handleDataClick,
    setSelectedRole,
  };
};
