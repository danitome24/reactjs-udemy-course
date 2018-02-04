import React, {Component} from 'react';
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Order/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
        };
    }

    /**
     * Update purchasable state depending on ingredients added
     * @param ingredients
     */
    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((key) => {
                return ingredients[key];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({
            purchasable: sum > 0,
        })
    };

    /**
     * Add ingredient to burger
     * @param type
     */
    addIngredientHandler = (type) => {
        const oldIngredient = this.state.ingredients[type];
        const updatedCount = oldIngredient + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const totalPrice = this.state.totalPrice;
        const priceAddition = totalPrice + INGREDIENTS_PRICE[type];

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: priceAddition,
        });

        this.updatePurchaseState(updatedIngredients);
    };

    /**
     * Remove ingredient to burger
     * @param type
     */
    removeIngredientHandler = (type) => {
        const ingredientToRemove = this.state.ingredients[type];
        if (ingredientToRemove <= 0) {
            return null;
        }
        const oldPrice = this.state.totalPrice;
        const updatedCount = ingredientToRemove - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = oldPrice - INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: priceSubtraction
        });
        this.updatePurchaseState(updatedIngredients);
    };

    /**
     * Display modal to purchase order
     */
    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        })
    };

    /**
     * Stop purchase
     */
    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false,
        });
    };

    /**
     * Continue the purchase
     */
    purchaseContinueHandler = () => {

    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal clicked={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients}/>
                </Modal>

                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    price={this.state.totalPrice}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
            </Aux>
        );
    }
    ;
}

export default BurgerBuilder;
