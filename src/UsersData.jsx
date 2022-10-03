import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function UsersData({value,keyVal}) {
  return (
          <div
            style={{
              margin: "20px",
            }}
          >
            <Card
              sx={{
                width: 400,
                ":hover": {
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.5)",
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    src={value.profile}
                    sx={{ bgcolor: "#0099ff" }}
                    aria-label="recipe"
                  ></Avatar>
                }
                action={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5px",
                    }}
                  >
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                }
                title={value.first_name}
                subheader={value.email}
              />
            </Card>
          </div>
  );
}

export default UsersData;
