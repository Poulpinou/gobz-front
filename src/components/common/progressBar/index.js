import React, {Component} from 'react';
import './style.scss';

class ProgressBar extends Component {

    clampProgress = (value) => {
        if (value < 0) {
            return 0;
        } else if (value > 1) {
            return 1;
        }
        return value;
    }

    render() {
        const {current, total} = this.props
        const progress = this.clampProgress(current / (total != 0 ? total : 1));

        return (
            <div className="custom-progress-bar" style={{height: (this.props.height ? this.props.height : 30) + "px"}}>
                <div className="progress-bar-background">
                    <div className="progress-bar-fill" style={{width: (progress * 100) + "%"}}>
                        <span className="progress-bar-text"
                              style={{fontSize: (this.props.height ? (this.props.height / 2) : 15) + "px"}}>
                            {current} / {total}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;