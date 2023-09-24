import Layout from "@/Layouts/Layout";
import { Head, Link } from "@inertiajs/react";

import ImgMain1 from "@/../images/img-main-1.jpg"
import ImgOutService1 from "@/../images/our-services-1.png"
import FormAppDoctor from "@/Components/FormAppDoctor";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from 'react-slick';
import parse from "html-react-parser"

export default (props) => {

    const { pagetitle, facility } = props;

    return <Layout
        {...props}
    >
        <Head title={pagetitle} />
        <div className="main-block">
            <div className="main-bg brightness-50">
                <img src={facility.data.image} alt={facility.data.title} />
            </div>
            <div className="container-outer">
                <div className="main-content flex flex-col justify-center text-center">
                    <h1 className="main-title">{facility.data.title}</h1>
                    <p className="main-subtitle">{facility.data.subtitle}</p>
                    <a href="#" className="btn-primary fw-700-16-20 py-4 px-6 mt-7 mx-auto">Заказать звонок</a>
                </div>
            </div>
        </div>
        <div className="massage-info bg-white py-20">
            <div className="container-outer facility-text">
                <div className="flex flex-col md:flex-row items-stretch gap-5 mb-5">
                    {facility.data.text1 ? <div className="white-block -gray mb-0 md:w-1/2 facility-text1">
                        {parse(facility.data.text1 ?? ``)}
                    </div> : ``}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        {facility.data.text2 ? <div className="white-block -gray mb-0  facility-text2">
                            {parse(facility.data.text2 ?? ``)}
                        </div> : ``}
                        {facility.data.text3 ? <div className="white-block -gray mb-0  facility-text3">
                            {parse(facility.data.text3 ?? ``)}
                        </div> : ``}
                    </div>
                </div>
                {facility.data.text4 ? <div className="white-block -gray mb-5 facility-text4">
                    {parse(facility.data.text4 ?? ``)}
                </div> : ``}
                {facility.data.text5 ? <div className="white-block -gray mb-5 facility-text5">
                    {parse(facility.data.text5 ?? ``)}
                </div> : ``}
                <div className="massage-courses mt-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10">
                        {facility.data.text6 ? <div className="grow facility-text6">
                            {parse(facility.data.text6 ?? ``)}
                        </div> : ``}
                        <div className="max-w-[21.875rem] shrink-0">
                            <img src={facility.data.text6image} alt="" />
                        </div>
                    </div>
                    {facility.data.sign1 ? <div className="warning-block">{facility.data.sign1}</div> : ``}
                    {facility.data.sign2 ? <div className="warning-block">{facility.data.sign2}</div> : ``}
                </div>
            </div>
        </div>
    </Layout>
}