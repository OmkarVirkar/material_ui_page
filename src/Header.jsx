import react, {component} from 'react';
import AcUnitRoundedIcon from "@material-ui/icons/AcUnitRounded"

import { makeStyles, Toolbar, AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles( () => ({
    typographyStyles: {
      flex:1
    }
  
}));

export const Header = (props) => {
    let classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.typographyStyles} align="left"> 
                {props.title}
            </Typography>
            <AcUnitRoundedIcon></AcUnitRoundedIcon>
            </Toolbar>
        </AppBar>
    );
}