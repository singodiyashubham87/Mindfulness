const LoginButton = (props) => {
  const { handleLogin } = props;
  return (
    <button
      className="bg-[#FF8020] hover:bg-[#ff9b4e] text-black text-[1.2rem] vsm:text-[1.5rem] sm:text-[1.7rem] px-[1rem] vsm:px-[1.5rem] sm:px-[3rem] hover:text-black border-2 border-black rounded-[0.625rem] z-[1]"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
};

export default LoginButton;
