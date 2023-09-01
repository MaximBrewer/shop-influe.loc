import { Link } from "@inertiajs/react"
import { Fragment } from "react"

export default (props) => {

    const { breadcrumbs = [
        {
            route: `home`,
            text: `Главная`
        }
    ], cabinet = false } = props


    return <div className={cabinet ? `catalogue-breadcrumb-wrapper justify-start fw-400-18-22` : `catalogue-breadcrumb-wrapper fw-400-18-22 flex-wrap`}>
        {breadcrumbs.map((item, index) => <Fragment key={index}>
            <div className={`catalogue-breadcrumb-item ${breadcrumbs.length - 1 == index ? `active` : ``}`}>
                {breadcrumbs.length - 1 > index ? <Link href={route(item.route, item.params)}>{item.text}</Link> : <span>{item.text}</span>}
            </div>
            {breadcrumbs.length - 1 > index ? <div className="catalogue-breadcrumb-dot-wrapper center">
                <div className="catalogue-breadcrumb-dot"></div>
            </div> : ``}
        </Fragment>)}
    </div>
}