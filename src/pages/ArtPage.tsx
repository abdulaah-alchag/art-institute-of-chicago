import { useParams } from "react-router";

const ArtPage = () => {
  const { id } = useParams();
  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default ArtPage;
