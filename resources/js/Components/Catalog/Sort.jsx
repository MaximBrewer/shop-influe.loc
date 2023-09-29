import { router, usePage } from "@inertiajs/react"

import Select from 'react-select'

const styles = {
    control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: `rgba(0,0,0,.2) !important`,
        borderRadius: `9999px`,
        minHeight: `40px`,
        boxShadow: `none !important`
    }),
    indicatorSeparator: (baseStyles, state) => ({
        ...baseStyles,
        display: `none`
    }),
    singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: `#414D55`,
        padding: `0 4px`
    }),
    menu: (baseStyles, state) => ({
        ...baseStyles,
        minWidth: `12rem`,
        left: `auto`,
        right: 0
    }),
}

const options = [
    { value: 'title:asc', label: 'По названию А-Я' },
    { value: 'title:desc', label: 'По названию Я-А' },
    { value: 'min_price:asc', label: 'Дешевле' },
    { value: 'min_price:desc', label: 'Дороже' }
]

export default () => {

    const { sort, order } = usePage().props

    return <Select
        options={options}
        styles={styles}
        isSearchable={false}
        placeholder={`Сортировка`}
        value={sort && order ? options.find(el => el.value == `${sort}:${order}`) : options[0]}
        onChange={value => router.visit(route('catalog', {
            sort: value.value.split(':')[0],
            order: value.value.split(':')[1],
        }))}
        theme={(theme) => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#f1f5f8',
                primary: '#3A9EAA',
            },
        })} />
}