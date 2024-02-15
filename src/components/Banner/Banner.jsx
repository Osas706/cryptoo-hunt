import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: 'url(./banner2.jpg)'
  },

  banerContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around'
  },

  tagline: {
    display: 'flex',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  }
}))

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.banerContent}>
        <div className={classes.tagline}>
          <Typography
            variant='h2'
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'montserrat',
            }}
          >
            Crypto Hunt
          </Typography>

          <Typography
            variant='subtitle2'
            style={{
              color: 'darkgray',
              textTransform: 'capitalize',
              fontFamily: 'montserrat'
            }}
          >
            Get all the info regarding your favourite Crypto Currency
          </Typography>
        </div>

        <Carousel />
      </Container>
    </div>
  )
}

export default Banner
