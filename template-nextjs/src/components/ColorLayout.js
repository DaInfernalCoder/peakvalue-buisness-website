import ColorPlate from "./ColorPlate";

const ColorLayout = ({ children }) => {
  return (
    <div>
      <ColorPlate />
      <main>{children}</main>
    </div>
  );
};

export default ColorLayout;
