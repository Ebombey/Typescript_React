type ColorButtonProps = {
  color: string;
  text: string;
  clickFunc: () => void;
  textColor?: string;
};

function ColorButton({
  color,
  text,
  clickFunc,
  textColor = "white",
}: ColorButtonProps) {
  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      <button
        className="px-4 py-2 text-white rounded-full"
        style={{ backgroundColor: color, color: textColor }}
        onClick={clickFunc}
      >
        {capitalize(text)}
      </button>
    </>
  );
}

export default ColorButton;
