import React from "react";
import cl from "./MyModal.module.scss";
import MyButton from "../button/MyButton";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        <MyButton onClick={() => setVisible(false)}>Закрыть окно</MyButton>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
