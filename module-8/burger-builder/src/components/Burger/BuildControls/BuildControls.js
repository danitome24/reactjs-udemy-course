import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    const controlsArray = controls.map((ctrl) => {
        return <BuildControl
            label={ctrl.label}
            key={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
    });

    var orderButton = props.purchasable
        ? <button className={classes.OrderButton} onClick={props.ordered}>ORDER NOW</button>
        : '';

    return (
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {controlsArray}
            {orderButton}
        </div>
    );
};

export default buildControls;
