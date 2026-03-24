import { Link } from "react-router-dom";
import { useContext } from "react";
import { LangContext } from "../LangContext";

export default function WishList() {
  const { trasnaltions, lang } = useContext(LangContext);

  return (
    <div className="container" style={{marginTop:"10rem"}}>
      <div className="row">

        <h2 className="fw-bolder">
          {trasnaltions[lang].AuthMyAccount}
        </h2>

        <form className="offset-md-4 mt-5 col-md-4">

          <label className="form-label text-muted fw-semibold">
            {trasnaltions[lang].AuthUsernameOrEmail}
            <span className="text-danger">*</span>
          </label>
          <input type="text" required className="form-control bg-light mt-2" />

          <label className="form-label text-muted mt-4 fw-semibold">
            {trasnaltions[lang].AuthPassword}
            <span className="text-danger">*</span>
          </label>
          <input type="password" required className="form-control bg-light mt-2" />

          <input type="checkbox" className="mt-4" />
          <span className="ms-1">
            {trasnaltions[lang].AuthRememberMe}
          </span>

          <button className="btn btn-dark d-block col-md-12 mt-4 mb-3 py-2">
            {trasnaltions[lang].AuthLogin}
          </button>

          <Link to="/ForgetPassword" className="text-warning">
            {trasnaltions[lang].AuthLostPassword}
          </Link>

        </form>
      </div>
    </div>
  );
}