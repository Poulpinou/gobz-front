import React, { Component } from 'react';
import StepItem from './StepItem'
import './style.scss';

class StepList extends Component {

    render(){
        const {steps} = this.props;

        if((steps?.length ?? 0) <= 0){
            return <p className="text-centered">Aucune étape</p>
        }else{
            return (
                <div className="step-list">
                    {steps.map(
                        (step) => (
                            <StepItem key={step.id} step={step}/>
                        )
                    )}
                </div>
            )
        }
    }
}

export default StepList;