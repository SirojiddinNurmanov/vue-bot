import Slider from "react-slick";
const ImageDetailSlider = ({ children, slideShow }) => {
    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div className="owl-prev arrow-icon right" onClick={onClick}>
                <i className="fas fa-arrow-right" />
            </div>
        );
    }
    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div className="owl-prev arrow-icon left" onClick={onClick}>
                <i className="fas fa-arrow-left" />
            </div>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideShow ? slideShow : 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        rows: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    rows: 1,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return <Slider {...settings}>{children}</Slider>;
};

export default ImageDetailSlider;
