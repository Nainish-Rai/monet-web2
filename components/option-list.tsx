import React, { useState } from "react";

interface OptionListProps {
  options: string[];
}

const OptionList: React.FC<OptionListProps> = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState<number>(2); // Assuming the center option is initially active

  const handleOptionClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div style={styles.container}>
      {options.map((option, index) => (
        <div
          key={index}
          style={{
            ...styles.option,
            ...(index === activeIndex
              ? styles.activeOption
              : styles.inactiveOption),
          }}
          onClick={() => handleOptionClick(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
  },
  option: {
    padding: "10px 20px",
    cursor: "pointer",
    width: "100%",
    textAlign: "center" as "center",
    borderBottom: "1px solid #dcdcdc",
    transition: "color 0.3s, font-weight 0.3s",
  },
  activeOption: {
    color: "#000000",
    fontWeight: "bold" as "bold",
    borderBottom: "2px solid #000000",
  },
  inactiveOption: {
    color: "#b0b0b0",
    fontWeight: "normal" as "normal",
  },
};

export default OptionList;
