import './App.css';
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@mui/material/FormControl';

const paperStyle = { padding: 20, width: 400, margin: "0 auto" }
const headerStyle = { margin: 0 }
const marginTop = { marginTop: 5 }

function App() {
  return (
    <div className="App">
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Add Your Project</h2>
                </Grid>
                <form>
                    <TextField fullWidth label='Project Name' placeholder="Enter your Project name" required/>
                    <TextField fullWidth label='Domain' placeholder="Enter your Project's Domain" required/>
                    <TextField fullWidth label='Tech-Stack' placeholder="Enter your Project's Tech Stack" required/>
                    <TextField fullWidth label='Description' placeholder="Enter your Project's Description" required/>

                   <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Year</FormLabel>
                        <RadioGroup aria-label="" name="" style={{ display: 'initial' }}>
                            <FormControlLabel value="FE" control={<Radio />} label="FE" />
                            <FormControlLabel value="SE" control={<Radio />} label="SE" />
                            <FormControlLabel value="TE" control={<Radio />} label="TE" />
                            <FormControlLabel value="BE" control={<Radio />} label="BE" />
                        </RadioGroup>
                    </FormControl> 
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Semester</FormLabel>
                        <RadioGroup aria-label="" name="" style={{ display: 'initial' }}>
                            <FormControlLabel value="I" control={<Radio />} label="I" />
                            <FormControlLabel value="II" control={<Radio />} label="II" />
                            <FormControlLabel value="III" control={<Radio />} label="III" />
                            <FormControlLabel value="IV" control={<Radio />} label="IV" />
                            <FormControlLabel value="V" control={<Radio />} label="V" />
                            <FormControlLabel value="VI" control={<Radio />} label="VI" />
                            <FormControlLabel value="VII" control={<Radio />} label="VII" />
                <FormControlLabel value="VIII" control={<Radio />} label="VIII" />

            </RadioGroup>
                    </FormControl> 

                    <TextField fullWidth label='Github Link' placeholder="Enter your Project's Github Link" />
                    <TextField fullWidth label='Google Drive Link ' placeholder="Enter your Project's Google Drive Link"/>
                    <TextField fullWidth label='Hosted Site Link' placeholder="Enter your project's Hosted Site Link"/>
                    <Button type='submit' variant='contained' color='secondary'>Submit</Button>
                </form>
            </Paper>
        </Grid>
    </div>
  );
}

export default App;
