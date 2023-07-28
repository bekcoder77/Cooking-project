import { NavLink } from "react-router-dom";
function PageNotFound() {
  return (
    <div className="pageNotFound-container text-center py-6 m-auto w-[100%] z-30 h-[100vh]">
      <h1 className="text">👇PageNotFound👇</h1>
      <img
        className="w-[600px] h-[400px] object-cover flex justify-center m-auto"
        src="https://cdn.lifehacker.ru/wp-content/uploads/2018/05/404-5_1527484247-e1527495397348.jpg"
        alt=""
      />
      <button className="btn-donate">
        <NavLink to="/">Home Page</NavLink>
      </button>
    </div>
  );
}
export default PageNotFound;
