import React from "react";

const UsersProfile = async (props) => {
  const name = await props.params;
  console.log(name);

  return <div>UsersProfile {name.username}</div>;
};

export default UsersProfile;
