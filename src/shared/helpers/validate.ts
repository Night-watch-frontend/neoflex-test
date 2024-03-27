import * as yup from "yup";

export const validateSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.\-_]+@.+\.[a-zA-Z0-9]{2,}$/g,
      "Email must consist of: a-z0-9@_-."
    )
    .email("Invalid email")
    .min(7, "Email must be at least 7 characters long")
    .max(80, "Email cannot be more than 80 characters"),
  name: yup
    .string()
    .matches(/^[a-zA-Z0-9._]+$/g, {
      message: "Username must consist of: a-zA-Z0-9_.",
      excludeEmptyString: true,
    })
    .max(100, "Username cannot be more than 100 characters"),
  payment: yup
    .string()
    .required("Field is required")
    .matches(/[0-9]{13,16}/, "Field must consist of: 0-9")
    .min(13, "Field must be at least 13 characters long")
    .max(16, "Field cannot be more than 16 characters"),
});
