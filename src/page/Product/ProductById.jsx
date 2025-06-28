import { useParams } from "react-router-dom";

const ProductById = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is Product by id page {id}</h1>
    </div>
  );
};

export default ProductById;
