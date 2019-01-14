import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import './News.css';

const styles = {
    card: {
        maxWidth: 275,
        margin: '5px 5px',
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
};

function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className="news_block">
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        11.10.2018 15:35
                </Typography>
                    <Typography variant="h5" component="h2">
                        Новый интерфейс на портале
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        от Ерина Павла
                </Typography>
                    <Typography component="p">
                        Уважаемые коллеги!
                    <br />
                        {` Сегодня (11.10.2018) на портале будут проводиться 
                    технические работы с 21:00 до 23:00, с целью обновления 
                    интерфейсас помощью которого Вы управляете серверами.` }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Читать далее</Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);