import DefaultImage from "../../assets/images/default_image.png";

function CustomImage(props) {
  return (
    <img
      {...props}
      alt={props.alt || ""}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = DefaultImage;
      }}
    />
  );
}

export default CustomImage;
