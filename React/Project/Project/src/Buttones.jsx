// buttones.jsx
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Buttones() {
  const handleClick = () => {
    console.log("button was clicked");
  };

  return (
    <>
      <h1>Material UI</h1>

      <Button variant="contained" onClick={handleClick}>Click Me</Button>
      <br /><br /><br />

      <Button variant="contained" disabled>Click Me</Button>
      <br /><br /><br />

      <Button variant="contained" color="success">Click Me</Button>
      <br /><br /><br />

      <Button variant="contained" color="error">Click Me</Button>
      <br /><br /><br />

      <Button variant="contained" color="error" size="small">Click Me</Button>
      <br /><br /><br />

      <Button variant="contained" color="error" size="large">Click Me</Button>
      <br /><br /><br />

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  );
}