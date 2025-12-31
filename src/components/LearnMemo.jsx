/* import React, { useEffect, useState } from "react";
const LearnMemo = () => {
  return (
    <>
      <Parent />
    </>
  );
};
export default LearnMemo;

const Parent = () => {
  const [pnum, setPnum] = useState(0);
  const [myNum, setMynum] = useState(0);
  useEffect(() => {
    console.log("parent-rendered");
  });
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl text-center my-4">Parent {pnum} {myNum}</h1>
      <button
        className="btn btn-success"
        onClick={() => setPnum((prev) => prev + 1)}
      >
        increment parent num
      </button><button
        className="btn btn-success"
        onClick={() => setMynum((prev) => prev + 1)}
      >
        increment mynum
      </button>
       <Child />
      <Child pnum={pnum}/>
    </div>
  );
};
const Child = React.memo(({pnum}) => {
  Memoization of Component
  useEffect(() => {
    console.log("child-rendered");
  });
  const [cNum, setCnum] = useState(0);
  return (
    <div className="flex items-center flex-col mb-4">
      <h1 className="text-3xl text-center my-4">Child {cNum} PNum {pnum}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCnum((prev) => prev + 1)}
      >
        increment child
      </button>
    </div>
  );
});
 */

import { useMemo, useState } from "react";

// import React, { useCallback, useEffect, useState } from "react";
const LearnMemo = () => {
  return (
    <>
      <Parent />
    </>
  );
};
export default LearnMemo;

/* const Parent = () => {
  const [pnum, setPnum] = useState(0);
  useEffect(() => {
    console.log("parent-rendered");
  });
  const incrementPnum = useCallback(() => {
    console.log("pnum is ", pnum);
  }, [pnum]);
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl text-center my-4">Parent {pnum}</h1>
      <button
        className="btn btn-success"
        onClick={() => setPnum((prev) => prev + 1)}
      >
        increment parent num
      </button>
      <Child incrementPnum={incrementPnum} />
    </div>
  );
};
const Child = React.memo(({ incrementPnum }) => {
  useEffect(() => {
    console.log("child-rendered");
  });
  //   useEffect(() => {
  //     incrementPnum();
  //   }, [incrementPnum]);
  const [cNum, setCnum] = useState(0);
  return (
    <div className="flex items-center flex-col mb-4">
      <h1 className="text-3xl text-center my-4">Child {cNum}</h1>
      <button
        className="btn btn-success"
        onClick={() => setCnum((prev) => prev + 1)}
      >
        increment child
      </button>
      <button className="btn btn-success" onClick={incrementPnum}>
        show pnum
      </button>
    </div>
  );
}); */

const Parent = () => {
  const [num, setNum] = useState(0);

  const sum = useMemo(() => {
    console.log("calculation started...");
    let temp = 0;
    for (let i = 0; i < 1e7; i++) temp += i;
    console.log("calculation ended..."+num);
    return temp + num;
  }, [num]);

  return (
    <div className="text-center my-12">
      <h1 className="text-3xl">
        Sum: {sum} | Num: {num}
      </h1>

      <div className="flex gap-4 justify-center mt-6">
        <button
          className="btn btn-primary"
          onClick={() => setNum((n) => n + 1)}
        >
          Increment Num
        </button>
      </div>
    </div>
  );
};
