import styled from "styled-components";
import CardWithTitle from "../shared/CardWithTitle";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addStore } from "../core/store/userSlice";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: grid;
  place-items: center;
`;

export const AddShop = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const newStore = {
      name: name,
      comments: [],
      orders: [],
      chartData: [],
      aspects: [],
      products: [],
    };
    dispatch(addStore(newStore));
    navigate("/");
  };

  return (
    <Wrapper>
      <CardWithTitle icon="" title={t("add.title")}>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Form onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("add.placeholder")}
              />
            </div>
            <button
              className="btn btn-success"
              style={{ marginTop: "4px", width: "50%" }}
            >
              {t("add.submit")}
            </button>
          </Form>
        </div>
      </CardWithTitle>
    </Wrapper>
  );
};
