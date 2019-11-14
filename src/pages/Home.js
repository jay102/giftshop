import React from 'react';

export default class Home extends React.Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {});
        });
    }
    render() {
        return (
            <>
                <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <img src="http://lorempixel.com/1250/300/nature/7" alt="img" className="responsive-img"
                        style={{ marginTop: "1px" }} />
                </div>

                <div className="row" style={{ marginTop: "-12px", marginBottom: "0px" }}>
                    <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/ios/50/000000/bunch-flowers.png" alt="img" className="responsive-img" />
                        <p className="white-text center" >Flowers</p>
                    </div>
                    </div>
                    <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/ios/50/000000/wedding-cake.png" alt="img" className="responsive-img"/>
                        <p className="white-text center" >Cakes</p>
                    </div>
                    </div>
                    <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/wired/50/000000/gift.png" alt="img" className="responsive-img" />
                        <p className="white-text center" >Personalised Gifts</p>
                    </div>
                    </div>
                    <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/ios/50/000000/give.png" alt="img" className="responsive-img"/>
                        <p className="white-text center" >Handmade Gifts </p>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

       