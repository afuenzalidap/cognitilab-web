import React from 'react'

export const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Ninestars</h3>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Whatsapp:</strong><a href="https://web.whatsapp.com/send?phone=56975571094&text" target = "_blank" rel="noreferrer"> +56 9 7557 1094<br /></a>
                                <strong>Email:</strong> <a href="mailto:contacto@cognitilab.cl" target = "_blank" rel="noreferrer">contacto@cognitilab.cl<br /></a>
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Home</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">About us</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Services</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Terms of service</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Web Design</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Web Development</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Product Management</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Marketing</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="/#">Graphic Design</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                            <div className="social-links mt-3">
                                <a href="https://www.facebook.com/Cognitilab-Jugueter%C3%ADa-114594570343554" className="facebook" target = "_blank" rel="noreferrer"><i className="bx bxl-facebook"></i></a>
                                <a href="https://www.instagram.com/cognitilab/?hl=es-la" className="instagram" target = "_blank" rel="noreferrer"><i className="bx bxl-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>Ninestars</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>
    )
}
