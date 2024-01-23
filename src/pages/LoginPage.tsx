import React, { FunctionComponent, useState } from "react";
import * as ReactDOM from "react-dom";
import CardWithTitle from "../shared/CardWithTitle";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { setUser } from "../core/store/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  max-height: 100vh;
`;

const Form = styled.form`
  display: grid;
  place-items: center;
`;

export const LoginPage: FunctionComponent = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (event) => {
    event.preventDefault();
    if (password === "1234" && username === "dawid") {
      dispatch(setUser("dawid"));
      navigate("/");
    } else {
      setIsError(true);
    }
  };

  return (
    <Wrapper>
      <CardWithTitle icon="" title={t("login.title")}>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Form onSubmit={onLogin}>
            {isError && (
              <div className="mb-2 text-danger">Błędne dane logowania</div>
            )}
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t("login.username")}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("login.password")}
              />
            </div>{" "}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {t("login.remember")}
              </label>
            </div>
            <button
              className="btn btn-success"
              style={{ marginTop: "4px", width: "75%" }}
            >
              {t("login.submit")}
            </button>
          </Form>
          <button
            className="btn btn-success"
            style={{ marginTop: "4px", width: "75%" }}
          >
            {t("login.register")}
          </button>
        </div>
      </CardWithTitle>
    </Wrapper>
  );
};
