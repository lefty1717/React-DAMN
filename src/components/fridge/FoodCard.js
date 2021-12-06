import React from 'react'
import { Card, Grid } from '@mui/material'
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';

function FoodCard(props){

    return(
        <div className="foodCard">
            <Grid 
            className="box"
            >
                <Card className="chickenCard">
                    <img src={props.food.imageURL} alt="" />
                </Card>

                <Card className="contextCard">
                    <Typography className="foodName">
                        {props.food.name}
                    </Typography>

                    <Typography className="detailCard">
                        數量：{props.food.quantity}{props.food.unit}
                        <br/>
                        {props.food.isFrozen}
                        <br/>
                        到期日：{props.food.endDate}
                        <br/>
                    </Typography>

                    <Typography className="expiredTime">
                            距離到期日：剩3日
                    </Typography>
                </Card>
                <Card className="delete-edit-card">
                    <Typography className="deleteButton">
                        <CloseIcon/>
                    </Typography>

                    <Typography className="editButton">
                        <CreateIcon/>
                    </Typography>
                </Card>
            </Grid>
        </div>
    )

}
export default FoodCard