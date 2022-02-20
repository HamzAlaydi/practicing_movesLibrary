import React, { useContext, useEffect, useState } from "react";
import { MoveContext } from "../../utils/contexts/MoveContext";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/validation/yup";
import { Link } from "react-router-dom";
import SendIcon from "@material-ui/icons/Send";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

//style
import "./enterMove.css";

const EnterMove = () => {
  //state
  const [display, setDisplay] = useState("false");

  //contexts
  const [moves, setMoves] = useContext(MoveContext);

  //constants
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      id: "",
    },
    resolver: yupResolver(schema),
  });

  //Functions
  const onSubmit = (data) => {
    setMoves((prevData) => [...prevData, data]);
    if (Object.keys(errors).length <= 0) {
      setDisplay(true);
    }
  };

  return (
    <>
      <Alert
        style={{ display: display == true ? "" : "none" }}
        severity="success"
        className="form"
      >
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Enter The Filem Name"
              id="fullWidth"
              margin="dense"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Enter The Filem ID"
              id="fullWidth"
              margin="dense"
              error={Boolean(errors.id)}
              helperText={errors.id?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              label="Enter The Filem Price"
              id="fullWidth"
              margin="dense"
              error={Boolean(errors.price)}
              helperText={errors.price?.message}
              {...field}
            />
          )}
        />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Add
        </Button>
        <Button>
          <Link to="/">Return to see Moves </Link>
        </Button>
      </form>
    </>
  );
};

export default EnterMove;
