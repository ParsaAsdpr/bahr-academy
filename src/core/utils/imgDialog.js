import React from "react";
import { PortalWithState } from "react-portal";


const styles = {
  appBar: {
    position: "relative",
  },
  flex: {
    flex: 1,
  },
  imgContainer: {
    position: "relative",
    flex: 1,
    padding: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
};

const ImgDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }) => (
        <React.Fragment>
          <button onClick={openPortal}>Open Portal</button>
          {portal(
            <p>
              <img src={props.img} alt="Cropped" className="w-full" />
              <button onClick={closePortal}>Close me!</button>, hit ESC or click
              outside of me.
            </p>
          )}
        </React.Fragment>
      )}
    </PortalWithState>
  );
};

export default ImgDialog;