import React from 'react';
import ReactDOM from 'react-dom';

export default class Cards extends React.PureComponent {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <img src="./img/Rectangle 84.png" alt="" />
                </div>
                <div className="card-content">
                    <div className="card-location">
                        <img src="./img/Fill 219.png"></img>
                        <p>ایران خاک دلیران</p>
                        <p>مشاهده در نقشه</p>
                    </div>
                    <div className="card-title">
                        <h1>کوه دماوند</h1>
                    </div>
                    <div class="card-date">
                        <p>1400/11/16 - 1400/11/20 </p>
                    </div>
                    <div className="card-text">
                        <p>
                            کوه دماوند در قسمت مرکزی رشته کوه البرز و در جنوب دریای خزر و در بخش لاریجان شهرستان آمل قرار دارد. 
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
