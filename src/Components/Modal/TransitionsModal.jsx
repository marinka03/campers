import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button";
import {
  ReviewLocationWrap,
  ReviewWrap,
} from "../CatalogFilterItem/CatalogFilterItem.styled";
import RatingStars from "../Stars/Stars";
import { GrLocation } from "react-icons/gr";
import BasicTabs from "../ModalTabs/ModalTabs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  padding: "40px",
  width: "982px",
  height: "90vh",
  overflow: "auto",
};

export default function TransitionsModal({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button text="Show more" onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {item.name}
              </Typography>
              <CloseIcon onClick={handleClose} />
            </div>

            <ReviewLocationWrap>
              <ReviewWrap>
                <RatingStars
                  stars_count={1}
                  rating={1}
                  spacing={4}
                  classNames={"star-rewiew"}
                />
                <span style={{ textDecoration: "underline" }}>
                  {item.rating}({item.reviews.length} Reviews)
                </span>
              </ReviewWrap>
              <div>
                <GrLocation />
                <span>{item.location}</span>
              </div>
            </ReviewLocationWrap>
            <span className="price">€{item.price}</span>
            <div>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <li
                  style={{
                    display: "block",
                    borderRadius: "20px",
                    width: "290px",
                    height: "310px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.gallery[0]}
                    alt="ghf"
                    style={{
                      width: "290px",
                      height: "310px",
                      objectFit: "none",
                    }}
                  />
                </li>
                <li
                  style={{
                    display: "block",
                    borderRadius: "20px",
                    width: "290px",
                    height: "310px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.gallery[1]}
                    alt="ghj"
                    style={{
                      width: "290px",
                      height: "310px",
                      objectFit: "none",
                    }}
                  />
                </li>
                <li
                  style={{
                    display: "block",
                    borderRadius: "20px",
                    width: "290px",
                    height: "310px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.gallery[2]}
                    alt="hg"
                    style={{
                      width: "290px",
                      height: "310px",
                      objectFit: "none",
                    }}
                  />
                </li>
              </ul>
            </div>

            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {item.description}
            </Typography>
            <BasicTabs item={item}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
