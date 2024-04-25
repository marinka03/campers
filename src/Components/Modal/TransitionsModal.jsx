import React from "react";
import { v4 as uuid } from "uuid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button";
import { ReviewWrap } from "../CatalogFilterItem/CatalogFilterItem.styled";
import RatingStars from "../Stars/Stars";
import { GrLocation } from "react-icons/gr";
import BasicTabs from "../ModalTabs/ModalTabs";
import {
  ReviewLocationWrap,
  CardName,
  GallaryList,
  GallaryItem,
  GallaryImg,
  StyledPrice,
} from "./TransitionsModal.styled";

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
              <CardName>{item.name}</CardName>
              <IoCloseSharp onClick={handleClose} size={32} />
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
            <StyledPrice className="price">
              €{item.price.toFixed(2)}
            </StyledPrice>

            <div>
              <GallaryList>
                { item.gallery.map(el => (
                  <GallaryItem key={uuid()}>
                    <GallaryImg src={el} alt="Current car" />
                  </GallaryItem>
                ))}
              </GallaryList>

              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {item.description}
              </Typography>
              <BasicTabs item={item} />
            </div>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
