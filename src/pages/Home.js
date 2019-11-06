import React from 'react';

const Home = () => {
    return (
        <>
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                <img src="http://lorempixel.com/1250/400/nature/3" alt="img" className="responsive-img" />
            </div>
            <div className="row" style={{ marginTop: "-12px", marginBottom: "0px" }}>
                <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/ios/50/000000/bunch-flowers.png" alt="img" />
                    <p className="white-text center" >Flowers</p>
                </div>
                </div>
                <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/ios/50/000000/wedding-cake.png" alt="img" />
                    <p className="white-text center" >Cakes</p>
                </div>
                </div>
                <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/wired/50/000000/gift.png" alt="img" />
                    <p className="white-text center" >Personalised Gifts</p>
                </div>
                </div>
                <div className="col s3"><div className="card-panel pink lighten-1 center"><img src="https://img.icons8.com/ios/50/000000/give.png" alt="img" />
                    <p className="white-text center" >Handmade Gifts </p>
                </div>
                </div>
            </div>
        </>
    )
}
export default Home;

        // <MDBRow>
        //     <MDBCol>
        //         <MDBCard style={{ width: "22rem", marginTop: "20px", marginLeft:"50px", marginRight:"50px" }}>
        //         <a href="/weddinggift">
        //             <img src={flower} className="float-left img-fluid" alt="img1" />
        //             </a>
        //             <MDBCardBody>
        //                 <MDBCardTitle>Wedding Gift</MDBCardTitle>
        //                 <MDBCardText>
        //                     Some quick example text to build on the card title and make
        //                     up the bulk of the card&apos;s content.
        //   </MDBCardText>
        //                 <MDBBtn href="/weddingproducts">shop now</MDBBtn>
        //             </MDBCardBody>
        //         </MDBCard>
        //     </MDBCol>
        //     <MDBCol>
        //         <MDBCard style={{ width: "22rem", marginTop: "20px", marginLeft: "20px" }}>
        //         <a href="/bdayproducts">
        //             <img src={flower} className="float-right img-fluid" alt="cake" />
        //             </a>
        //             <MDBCardBody>
        //                 <MDBCardTitle>Birthday Gift</MDBCardTitle>
        //                 <MDBCardText>
        //                     Some quick example text to build on the card title and make
        //                     up the bulk of the card&apos;s content.
        //   </MDBCardText>
        //                 <MDBBtn href="/bdayproducts">shop now</MDBBtn>
        //             </MDBCardBody>
        //         </MDBCard>
        //     </MDBCol>
        //     <MDBCol>
        //         <MDBCard style={{ width: "22rem", marginTop: "20px", marginLeft: "20px" }}>
        //         <a href="/xmasgift">
        //             <img src={flower} className="float-left img-fluid" alt="choclate" />
        //             </a>
        //             <MDBCardBody>
        //                 <MDBCardTitle>Christmas Gift</MDBCardTitle>
        //                 <MDBCardText>
        //                     Some quick example text to build on the card title and make
        //                     up the bulk of the card&apos;s content.
        //   </MDBCardText>
        //                 <MDBBtn href="/christmasproducts">shop now</MDBBtn>
        //             </MDBCardBody>
        //         </MDBCard>
        //     </MDBCol>
        // </MDBRow>

