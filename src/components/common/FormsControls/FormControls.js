import React from "react";
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
