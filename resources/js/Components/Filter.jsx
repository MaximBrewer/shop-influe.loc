import { usePage } from "@inertiajs/react"
import { useState } from "react"

const Item = ({ item }) => {

    const [opened, setOpened] = useState(false)

    return <li className="filter-sidebar__item">
        <div className="filter-sidebar__item-title fw-600-16-19 cursor-pointer py-[9px] -mt-[9px] mb-0 px-[21px] -mx-[21px]" onClick={e => setOpened(prev => !prev)}>{item.title}</div>
        {opened ? <ul className="checkbox-grid max-h-[24rem] overflow-y-auto p-2">
            {item.values.map((value, vdx) => <li key={value}>
                <label htmlFor={`specification-${item.id}-${vdx}`} className="checkbox-grid__item">
                    <div className="checkbox-wrapper center">
                        <input type="checkbox" name={`specification-${item.id}`} id={`specification-${item.id}-${vdx}`} />
                    </div>
                    <div className="checkbox-label-wrapper center">
                        <div className="checkbox-label">{value}</div>
                    </div>
                </label>
            </li>)}
        </ul> : ``}
    </li>
}

export default (props) => {

    const { specifications } = usePage().props

    const [filter, setFilter] = useState({})

    return <ul className="filter-sidebar catalogue__filter-sidebar fw-400-16-19">
        <li className="filter-sidebar__title center">Фильтр</li>
        <ul className="filter-sidebar__inner">
            {specifications.data.map((item) => <Item key={item.id} item={item} />)}
        </ul>
    </ul>
}