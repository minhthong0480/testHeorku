import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  return (
    <Fragment>
      <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="d-flex flex-row"></div>
                    <div className="row news-card p-3 bg-white">
                        <div className="col-md-4">
                            <div className="feed-image"><img className="news-feed-image rounded img-fluid img-responsive" src="https://kimipet.vn/wp-content/uploads/2021/07/khach-san-cho-meo-tphcm.jpg"/></div>
                        </div>
                        <div className="col-md-8">
                            <div className="news-feed-text">
                                <a href="https://kimipet.vn/khach-san-cho-meo-tphcm/"><h4>TOP #12 Khách sạn chó mèo tại thành phố Hồ Chí Minh hàng đầu</h4></a><br/><span>Khách sạn chó mèo TPHCM là nơi trông giữ thú cưng dành cho những người công việc bận rộn hoặc đi chơi xa, không thể chăm sóc các bé. <br/></span>
                                <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                                    <div className="d-flex creator-profile"><img className="rounded-circle" src="https://i.imgur.com/uSlStch.jpg" width="50" height="50"/>
                                        <div className="d-flex flex-column ml-2">
                                            <h6 className="username">Alexendor patriot</h6><span className="date">Jan 20,2020</span>
                                        </div>
                                    </div><i className="fa fa-share share"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="d-flex flex-row"></div>
                    <div className="row news-card p-3 bg-white">
                        <div className="col-md-4">
                            <div className="feed-image"><img className="news-feed-image rounded img-fluid img-responsive" src="https://thuythithi.com/wp-content/uploads/2020/04/6-bi-quyet-cham-soc-thu-cung-luon-khoe-manh.jpg"/></div>
                        </div>
                        <div className="col-md-8">
                            <div className="news-feed-text">
                            <a href="https://thuythithi.com/6-bi-quyet-cham-soc-thu-cung-luon-khoe-manh/"><h4>6 bí quyết chăm sóc thú cưng luôn khoẻ mạnh</h4></a><br/><span>Thú cưng là con vật luôn khiến chúng ta hạnh phúc bởi vì sự đáng yêu của chúng. Hãy thử tưởng tượng một ngày dài làm việc căng thẳng, bạn về nhà và luôn có “một người bạn” đợi bạn ở nhà. Mỗi hành động nhỏ của chúng cũng khiến bạn cảm thấy yêu đời và nhẹ nhõm.  <br/></span>
                                <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                                    <div className="d-flex creator-profile"><img className="rounded-circle" src="https://i.imgur.com/uSlStch.jpg" width="50" height="50"/>
                                        <div className="d-flex flex-column ml-2">
                                            <h6 className="username">Alexendor patriot</h6><span className="date">Jan 20,2020</span>
                                        </div>
                                    </div><i className="fa fa-share share"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="d-flex flex-row"></div>
                    <div className="row news-card p-3 bg-white">
                        <div className="col-md-4">
                            <div className="feed-image"><img className="news-feed-image rounded img-fluid img-responsive" src="https://petshopsaigon.vn/wp-content/uploads/2020/02/cho-bieng-an-2.png"/></div>
                        </div>
                        <div className="col-md-8">
                            <div className="news-feed-text">
                            <a href="https://petshopsaigon.vn/tin-tuc/cho-bieng-an"><h4>Chó biếng ăn: 16 mẹo kích thích khẩu vị từ bác sĩ Hoa Kỳ</h4></a><br/><span>Chó biếng ăn là tình trạng rất thường gặp. Bạn đang nuôi một chú chó kén ăn và đang đau đầu vì không biết cho bé ăn gì?  <br/></span>
                                <div className="d-flex flex-row justify-content-between align-items-center mt-2">
                                    <div className="d-flex creator-profile"><img className="rounded-circle" src="https://i.imgur.com/uSlStch.jpg" width="50" height="50"/>
                                        <div className="d-flex flex-column ml-2">
                                            <h6 className="username">Alexendor patriot</h6><span className="date">Jan 20,2020</span>
                                        </div>
                                    </div><i className="fa fa-share share"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="section pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">Exclusive features</h2>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-lg- mb-4">
                        <div className="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> <img src="https://i.imgur.com/zyCBebp.png" className="img-fluid" alt="feature-image"/>
                            <h5 className="pt-5 pb-3 text-capitalize card-title">Our Clean System</h5>
                            <p className="mb-4">We ensure our facilities are not only spotless, but fully sanitized, and smellclean, so that your dog stays healthy while in our care.</p> <a className="btn btn-outline-primary" href="#" data-abc="true">read more</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-lg- mb-4">
                        <div className="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> <img src="https://i.imgur.com/zyCBebp.png" className="img-fluid" alt="feature-image"/>
                            <h5 className="pt-5 pb-3 text-capitalize card-title">Our Experience</h5>
                            <p className="mb-4">We are proud to lead the way in the luxury pet hospitality industry, and provide world class accommodations and service to our guests so that your dog is happy, comfortable, and relaxed.</p> <a className="btn btn-outline-primary" href="#" data-abc="true">read more</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-lg- mb-4">
                        <div className="hover-bg-primary text-center position-relative px-4 py-5 rounded-lg shadow"> <img src="https://i.imgur.com/zyCBebp.png" className="img-fluid" alt="feature-image"/>
                            <h5 className="pt-5 pb-3 text-capitalize card-title">Our Certificate</h5>
                            <p className="mb-4">Our customers tell us our staff is the best in the business. Caring staff members are pet lovers to start, then K9 Resorts professionally educates, trains and certifies each one providing unparalleled customer service, animal expertise and peace of mind.</p> <a className="btn btn-outline-primary" href="#" data-abc="true">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    

    </Fragment>
  );
};

export default Home;
