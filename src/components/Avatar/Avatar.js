import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/hassan.jpg";

const Avatar = () => {
  const classes = useStyles();
  return (
    <img src={AvatarImg} alt="Hassan Jarko" className={classes.avatarImg} />
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius: "50%",
    width: "270px",
    height: "350px",
    objectFit: "cover",
    boxShadow: theme.shadows[10],
  },
}));

export default Avatar;
