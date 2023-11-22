const LogoutButton = (props) => {
  const { handleLogout } = props;
  return (
    <button
      className="bg-[#FF8020] text-black text-[1.3rem] sm:text-[1.5rem] px-[1rem] sm:px-[2rem] hover:bg-white hover:text-black border-2 border-black rounded-[0.625rem]"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
