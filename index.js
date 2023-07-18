const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={className}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="btn-container">
      <Button text="Like" className="button button-1" />
      <Button text="Comment" className="button button-2" />
      <Button text="Share" className="button button-3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
