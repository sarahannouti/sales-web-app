import {
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import useConstraints from "../../hooks/useConstraints";

const constraints = [
  { name: "scope", label: "Scope" },
  { name: "time", label: "Time" },
  { name: "cost", label: "Cost" },
];

export default function ProjectsPage() {
  const { constraintsState, toggle } = useConstraints(constraints);
  return (
    <>
      <Typography variant="h1">Projects</Typography>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Project Management Triangle</FormLabel>
        <FormGroup>
          {constraints.map(({ name, label }) => (
            <FormControlLabel
              key={name}
              control={
                <Switch
                  checked={constraintsState[name]}
                  onChange={toggle(name)}
                  name={name}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </>
  );
}
