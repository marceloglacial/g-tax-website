interface LogoProps {
  size?: "lg" | "sm";
}
const Logo = (props: LogoProps) => {
  const logoSize = {
    lg: `text-5xl`,
    sm: `text-3xl`,
  };

  return (
    <div className={`${logoSize[props.size || "lg"]} font-semibold`}>
      <span className="text-white">G</span>
      <span className="text-accent">Tax</span>
    </div>
  );
};

export default Logo;
