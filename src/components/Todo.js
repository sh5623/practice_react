import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { check, remove, edit } from "../store/todosReducer";

function getClassName({ done, isEdit }) {
  const className = [];
  if (done) {
    className.push("completed");
  }

  if (isEdit) {
    className.push("editing");
  }

  return className.join(" ");
}

function Todo({ id, done, text }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(text);
  const [isEdit, setIsEdit] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isEdit) {
      inputEl.current.focus();
    }
  }, [isEdit]);

  const editText = () => {
    const text = value.trim();
    if (text === "") {
      return;
    }

    setIsEdit(false);
    dispatch(edit({ id, text }));
  };

  const handleEnter = (e) => {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (!(e.keyCode === 13 || e.key === "Enter")) {
      return;
    }
    editText();
  };

  const className = getClassName({ done, isEdit });

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={done}
          onChange={(e) => dispatch(check({ id, checked: e.target.checked }))}
        />
        <label
          onDoubleClick={() => {
            setIsEdit(true);
          }}
        >
          {text}
        </label>
        <button className="destroy" onClick={() => dispatch(remove(id))} />
      </div>
      <input
        className="edit"
        value={value}
        onInput={(e) => setValue(e.target.value)}
        onKeyDown={handleEnter}
        onBlur={() => setIsEdit(false)}
        ref={inputEl}
      />
    </li>
  );
}

export default Todo;
