import DefaultImage from "../../assets/images/default_image.png";

function CustomImage(props) {
  return (
    <img
      {...props}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = DefaultImage;
      }}
    />
  );
}

export default CustomImage;
