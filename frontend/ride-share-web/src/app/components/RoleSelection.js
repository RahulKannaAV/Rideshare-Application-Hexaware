import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const RoleSelector = function({avRoles, roleSelector}) {
    return (
        <FormControl sx={{
            marginTop: "20px",
            width: "200px"
        }}>
            <InputLabel id="role-label" variant="standard">
                Role
            </InputLabel>
            <Select
            defaultValue={avRoles[0]}
            labelId="role-label"
            onChange={(e) => roleSelector(e.target.value)}
            >
                {avRoles.map((role, idx) => (
                    <MenuItem key={idx} value={role}>{role}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default RoleSelector;