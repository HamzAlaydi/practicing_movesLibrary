import * as yup from "yup";
export const schema = yup
  .object({
    name: yup.string().required(),
    price: yup.number().positive().integer().required(),
    id: yup.number().positive().integer().required(),
  })
  .required();
