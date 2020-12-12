import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ShareIcon from '@material-ui/icons/Share';
import { Avatar, CardMedia, Grid, IconButton } from '@material-ui/core';
import coffeeMakerList from "./constants";


export const ItemCard = (props) => {
    return (
        <Grid container spacing={2}>
            {
                coffeeMakerList.map((coffeeObj) => (
                    <Fragment>
                        <Grid item xs={12} sm={6} lg={4}>
                            <CoffeCard title={coffeeObj.title} price={coffeeObj.price} description={coffeeObj.description} 
                                price={coffeeObj.price} imageSrc={coffeeObj.imageUrl} avatarSrc={coffeeObj.avatarUrl}
                            />
                        </Grid>  
                    </Fragment>
                ))
            }
            
        </Grid>
    );
}


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const CoffeCard = (props) => {
    const classes = useStyles();

    let {avatarSrc, title, description, price, imageSrc} = props;
    return (
        <Card variant="outlined" style={{height:"100%"}}>
            <CardHeader
                
                avatar={
                    <Avatar src={avatarSrc} />
                }
                action={
                <IconButton aria-label="settings">
                    <ShareIcon />
                </IconButton>
                }
                title={title}
                subheader={price}
                titleTypographyProps={{align:"left"}}
                subheaderTypographyProps={{align:"left"}}
            />
            <CardMedia style={{height:"150px"}} image={imageSrc}/>
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                    <br />
                </Typography>
            </CardContent>
            
            <Button color="secondary">BUY NOW</Button>
            <Button color="secondary">OFFER</Button>
            
        </Card>
    );
}