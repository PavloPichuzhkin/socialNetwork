import React, { useEffect, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";

const ProfileStatusWithHook = (props) => {
  // const [count, setCount] = useState(0);

  // // Аналогично componentDidMount и componentDidUpdate:
  // useEffect(() => {
  //   // Обновляем заголовок документа с помощью API браузера
  //   document.title = `Вы нажали ${count} раз`;
  // });

  // return (
  //   <div>
  //     <p>Вы нажали {count} раз</p>
  //     <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
  //   </div>

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (event) => {
    ///onStatusChange () declaretioon dont work
    console.log(event.currentTarget);
    console.log(event.target);
    setStatus(event.currentTarget.value);
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span
            onDoubleClick={() => {
              activateEditMode();
            }}
          >
            {props.status || "----"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={() => {
              deactivateEditMode();
            }}
            defaultValue={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHook;
