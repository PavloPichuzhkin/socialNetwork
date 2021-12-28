import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./FormControls.module.css";

export const TagInputOrTextarea = (Tag) => ({ input, meta, ...props }) => {
  // console.log({ input, meta, ...props });
  const hasError = meta.error && meta.touched;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <Tag {...input} {...props} />
      </div>
      {hasError && (
        <span className={styles.formControl + " " + styles.error}>
          {meta.error}
        </span>
      )}
    </div>
  );
};

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.error && meta.touched;
  console.log({ input, meta, child, ...props });
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>
      {hasError && (
        <span className={styles.formControl + " " + styles.error}>
          {meta.error}
        </span>
      )}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validate,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validate}
        component={component}
        {...props}
      />{" "}
      {text}
    </div>
  );
};

// export const Textarea = ({ input, meta, ...props }) => {
//   console.log({ input, meta, ...props });
//   const hasError = meta.error && meta.touched;
//   return (
//     <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && (
//         <span className={styles.formControl + " " + styles.error}>
//           {meta.error}
//         </span>
//       )}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   console.log({ input, meta, ...props });
//   const hasError = meta.error && meta.touched;
//   return (
//     <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && (
//         <span className={styles.formControl + " " + styles.error}>
//           {meta.error}
//         </span>
//       )}
//     </div>
//   );
// };
