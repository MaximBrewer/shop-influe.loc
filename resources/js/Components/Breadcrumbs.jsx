import { Link } from "@inertiajs/react"
import { Fragment } from "react"

export default (props) => {

    const { breadcrumbs = [
        {
            route: `home`,
            text: `Главная`
        }
    ] } = props
    
    return <div className="catalogue-breadcrumb-wrapper fw-400-18-22">
        {breadcrumbs.map((item, index) => <Fragment key={index}>
            <div className="catalogue-breadcrumb-item">
                {item.route ? <Link href={route(item.route)}>{item.text}</Link> : <span>{item.text}</span>}
            </div>
            {breadcrumbs.length - 1 > index ? <div className="catalogue-breadcrumb-dot-wrapper center">
                <div className="catalogue-breadcrumb-dot"></div>
            </div> : ``}
        </Fragment>)}
    </div>
}