import { useContext } from "react";
import { LangContext } from "./LangContext";

export default function ForgetPassword() {
  const { trasnaltions, lang } = useContext(LangContext);

  return (
    <div className="container" style={{marginTop:"10rem"}}>
      <div className="row">

        <h2 className="fw-bolder">
          {trasnaltions[lang].AuthMyAccount}
        </h2>

        <form className="offset-md-4 mt-5 col-md-4">
          <p className="text-muted">
            {trasnaltions[lang].ForgetPasswordText}
          </p>

          <label className="form-label text-muted fw-semibold">
            {trasnaltions[lang].AuthUsernameOrEmail}
            <span className="text-danger">*</span>
          </label>

          <input type="text" required className="form-control bg-light mt-2" />

          <button className="btn btn-dark d-block col-md-12 mt-4 mb-3 py-2">
            {trasnaltions[lang].AuthResetPassword}
          </button>
        </form>
      </div>
    </div>
  );
}