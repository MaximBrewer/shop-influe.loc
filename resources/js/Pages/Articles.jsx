import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

import PromotionBlockImg from "../../images/promotion-block-img.png"
import Slider from 'react-slick';
import Paginate from '@/Components/Paginate';

export default ({ auth, posts, pagetitle = `` }) => {


    var settings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        arrows: true,
        // prevArrow: '<div class="slick-arrow-wrapper arrow-left center"><ion-icon name="arrow-back-outline"></ion-icon></div>',
        // nextArrow: '<div class="slick-arrow-wrapper arrow-right center"><ion-icon name="arrow-forward-outline"></ion-icon></div>',
        dots: true,
        responsive: [{
            breakpoint: '600',
            variableWidth: true
        }]
    };


    return (
        <Layout
            user={auth.user}
        >
            <Head title={pagetitle} />
            <div class="container-outer">
                <div className="articles-outer">
                    <div className="articles-inner">
                        {posts.data.map((post, pdx) => <div key={pdx} className={``}>
                            {post.title}
                        </div>)}
                    </div>
                    <Paginate {...posts} />
                </div>
            </div>
        </Layout>
    );
}
