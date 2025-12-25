import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  // const [num, setNum] = useState(0);
  // const [name, setName] = useState("");
  // const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   console.log("component re-rendered!");
  // }); // runs everytime when component is re-rendered

  //   useEffect(()=>{
  //     console.log("component re-rendered!");
  //   },[]); // runs only 1 time when component is first loaded

  //   useEffect(() => {
  //     console.log("Num = ", num);
  //   }, [num]);

  //   useEffect(() => {
  //     console.log("Num = ", num," count = ",count);
  //   }, [num,count]);

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let clockId = setInterval(() => {
      let date = new Date();
      console.log(date);
      setDate(date);
    }, 1000);

    return () => clearInterval(clockId); // cleanup function
  }, []);

  return (
    <div className="my-12 text-center">
      <h1 className="text-3xl">{date.toString()}</h1>

      {/*
       <h1 className="text-3xl">
        Num : {num} and Name : {name} Count : {count}
      </h1>
      Enter Name :
      <input
        type="text"
        className="border my-3"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <button className="btn btn-primary mt-4" onClick={() => setNum(num + 1)}>
        increment num
      </button>
      <button className="btn btn-success ml-1 mt-4" onClick={() => setCount(count + 1)}>
        increment count
      </button> */}
    </div>
  );
};

export default LearnUseEffect;
