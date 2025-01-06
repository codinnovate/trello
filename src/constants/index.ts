
type navItemTypes = {
    label: string,
    href: string,
    current: boolean

}


const navItemContent:navItemTypes[] = [
    {
        label: "Travel",
        href: "/",
        current: false,
    },
    {
        label: "Explore",
        href: "/",
        current: false,
    },
    {
        label: "Flights",
        href: "/",
        current: true,
    },
    {
        label: "Hotels",
        href: "/",
        current: false,
    },
    {
        label: "Vacation rentals",
        href: "/",
        current: false,
    }
]



export default {
    navItemContent
}