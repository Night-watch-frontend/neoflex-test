import { FC, useState } from "react";
import { Modal } from "../modal";
import styles from "./payment.module.scss";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "../../helpers/validate";

export const Payment: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(validateSchema),
    mode: "all",
  });

  const onSubmit = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Modal>
        <div className={styles.container}>
          <h4>{"Для оплаты товара необходимо заполнить данные поля"}</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputField}>
              <label className={styles.label}>
                {"Email"}
                <Controller
                  control={control}
                  name="email"
                  render={({
                    field: { value = "", onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <>
                      <input
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                      <div className={styles.errorText}>
                        {error ? error.message : ""}
                      </div>
                    </>
                  )}
                />
              </label>
            </div>
            <div className={styles.inputField}>
              <label className={styles.label}>
                {"Ваше имя"}
                <Controller
                  control={control}
                  name="name"
                  render={({
                    field: { value = "", onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <>
                      <input
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                      <div className={styles.errorText}>
                        {error ? error.message : ""}
                      </div>
                    </>
                  )}
                />
              </label>
            </div>
            <div className={styles.inputField}>
              <label className={styles.label}>
                {"Номер карты"}
                <Controller
                  control={control}
                  name="payment"
                  render={({
                    field: { value = "", onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <>
                      <input
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                      <div className={styles.errorText}>
                        {error ? error.message : ""}
                      </div>
                    </>
                  )}
                />
              </label>
            </div>
            <button type="submit" className={styles.btn} disabled={!isValid}>
              {"Оплатить"}
            </button>
          </form>
        </div>
      </Modal>
      {isOpen && (
        <Modal>
          <div className={styles.container}>
            <h4>{"Сервис недоступен"}</h4>
          </div>
        </Modal>
      )}
    </>
  );
};
