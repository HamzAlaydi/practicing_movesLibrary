import React, { useContext, useEffect } from "react";
import { MoveContext } from "../../utils/contexts/MoveContext";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/validation/yup";
import { Link } from "react-router-dom";

//style
import "./enterMove.css";

const EnterMove = () => {
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

  const onSubmit = (data) => {
    setMoves((prevData) => [...prevData, data]);
  };

  //useEffect
  useEffect(() => {
    console.log(moves);
  }, [moves]);

  return (
    <>
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
        <button type="submit">submit</button>
        <Button>
          <Link to="/">Return to see Moves </Link>
        </Button>
      </form>
    </>
  );
};

export default EnterMove;
