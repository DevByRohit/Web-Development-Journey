const App = () => {
  const mouseScrolling = (elem) => {
    if (elem > 0) {
      console.log("seedha scroll ker rhe ho..");
    } else {
      console.log("Ulta scroll ker rhe ho");
    }
  };
  return (
    <div
      onWheel={(elem) => {
        mouseScrolling(elem.deltaY);
      }}
    >
      <div className="box-1"></div>
      <div className="box-2"></div>
      <div className="box-3"></div>
    </div>
  );
};

export default App;
