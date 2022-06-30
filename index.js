const Notification = (props) => {
  const { name, url, className } = props;
  return (
    <div className="button">
      <div className={className}>
        <img className="image" src={url} />
        <p className="para">{name} </p>
      </div>
    </div>
  );
};

const element = (
  <div className="container ">
    <h1 className="heading"> Notifications</h1>
    <Notification
      name="Information Message"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="blue"
    />
    <Notification
      name="Success Message"
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="green "
    />
    <Notification
      name="Warning Message"
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      className=" golden "
    />
    <Notification
      name="Error Message"
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png "
      className="red"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
