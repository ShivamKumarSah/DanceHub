import React from 'react';
import CountUp from 'react-countup';
import './CounterSection.css';

const CounterSection = () => {
    return (
        <section id="statistic" className="statistic-section one-page-section">
            <div className="container">
                <div className="row text-center">
                    <div className="col-xs-12 col-md-3">
                        <div className="counter">
                            <h2 className="timer count-title">
                                <CountUp end={146} duration={10} />+
                            </h2>
                            <div className="stats-line-black"></div>
                            <p className="stats-text">Dance Classes</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <div className="counter">
                            <h2 className="timer count-title">
                                <CountUp end={50} duration={10} />+
                            </h2>
                            <div className="stats-line-black"></div>
                            <p className="stats-text">Best Instructor</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <div className="counter">
                            <h2 className="timer count-title">
                                <CountUp end={15} duration={10} />+
                            </h2>
                            <div className="stats-line-black"></div>
                            <p className="stats-text">Total Brunch</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <div className="counter">
                            <h2 className="timer count-title">
                                <CountUp end={560} duration={10} />+
                            </h2>
                            <div className="stats-line-black"></div>
                            <p className="stats-text">Happy Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
