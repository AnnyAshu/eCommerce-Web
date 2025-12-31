import { useEffect, useRef, useState } from "react";

const UseRefDemo = () => {
  const h1Ref = useRef(null);
  const num = useRef(0);
  const [num2, setNum2] = useState(0);
  const changeStyle = () => {
    // const h1Obj = document.getElementById("head1");
    // const h1Obj = h1Ref.current;
    // h1Obj.style.color = "red";
    num.current += 1;
  };
  useEffect(() => {
    console.log(num.current+ "  :  "+ num2);
  });
  return (
    <div className="flex justify-center my-12 flex-col items-center">
      <h1 id="head1" className="text-3xl" ref={h1Ref}>
        Lorem ipsum dolor sit amet. Num :{num.current} Num2 : {num2}
      </h1>
      <div className="txt">
        <button className="btn btn-primary" id="btn1" onClick={changeStyle}>
          increment num
        </button>
        <button
          className="btn btn-success"
          id="btn2"
          onClick={() => setNum2((prev) => prev + 1)}
        >
          increment num2
        </button>
      </div>
    </div>
  );
};

export default UseRefDemo;
