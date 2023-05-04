import classes from "./index.module.scss";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import ActiveInput from "../../components/ActiveInput/ActiveInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import SucceedCard from "../../components/SucceedCard/SucceedCard";
import Loader from "../../components/Loader/Loader";

const CreateEmployee = () => {
  const [form, setForm] = useState({
    fullName: "",
    position: "",
    email: "",
    number: "",
    file: "",
  });

  const [error, setError] = useState(false);

  const [succeed, setSucceed] = useState(false);

  const [loading, setLodaing] = useState(false);

  function numberHandler(e) {
    setForm((p) => ({ ...p, number: e.target.value.replace(/[^0-9]/g, "") }));
  }

  function emailHandler(e) {
    setForm((p) => ({ ...p, email: e.target.value }));
  }

  function fullNameHandler(e) {
    setForm((p) => ({ ...p, fullName: e.target.value }));
  }

  function fileHandler(e) {
    setForm((p) => ({ ...p, file: e.target.files[0] }));
  }

  function positionHandler(e) {
    setForm((p) => ({ ...p, position: e.target.value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    setLodaing(true);

    const reqexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isCorrect =
      !form.fullName ||
      !form.position ||
      !reqexp.test(form.email) ||
      !form.number ||
      !form.file;

    if (isCorrect) {
      setError(true);
      setLodaing(false);
      return;
    }

    // Запрос к api
    setTimeout(() => {
      setSucceed(true);
      setError(false);
      setLodaing(false);
      setForm({
        fullName: "",
        position: "",
        email: "",
        number: "",
        file: "",
      });
    }, 3000);
  }

  return (
    <div className={classes.wrapper}>
      {loading && <Loader />}
      {succeed && (
        <div className={classes.wrapper_succeed}>
          <SucceedCard>Сотрудник сохранен</SucceedCard>
        </div>
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.item}>
          <span>ФИО</span>
          <ActiveInput
            onChange={fullNameHandler}
            value={form.fullName}
            type="text"
            placeholder={"Шутов Вадим Николаевич"}
            required
          />
        </div>
        <div className={classes.item}>
          <span>Должность</span>
          <ActiveInput
            onChange={positionHandler}
            value={form.position}
            type="text"
            placeholder={"Директор"}
            required
          />
        </div>
        <div className={classes.item}>
          <span>Телефон</span>
          <ActiveInput
            onChange={numberHandler}
            value={form.number}
            type="tel"
            placeholder={"+7 (098) 876 34-34"}
            required
          />
        </div>
        <div className={classes.item}>
          <span>Электронная почта</span>
          <ActiveInput
            onChange={emailHandler}
            value={form.email}
            type="text"
            placeholder={"shutov@surpk.ru"}
            required
          />
        </div>
        <div className={classes.item}>
          <span>Фотография</span>
          <label className={classes.file}>
            <p>{!form.file ? "Файл не выбран" : form.file.name}</p>
            <ActiveInput
              onChange={fileHandler}
              type="file"
              required
              accept="image/*"
            />
          </label>
        </div>
        {error && (
          <div className={classes.error}>
            <span>Некорректные данные</span>
          </div>
        )}

        <Link to="/">
          <span>Назад</span>
        </Link>

        <SecondaryButton onClick={submitHandler} type="submit">
          Сохранить
        </SecondaryButton>
      </form>
    </div>
  );
};

export default CreateEmployee;
