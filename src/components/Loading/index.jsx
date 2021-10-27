import Loader from "react-loader-spinner";
function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Loader type="Grid" color="#00bfff" height={550} width={80} />
    </div>
  );
}

export default Loading;
