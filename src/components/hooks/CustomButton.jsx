function CustomButton({ onClick, children }) {
  return (
    <button class="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default CustomButton;
