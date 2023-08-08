

export function Navigation() {
    return (
//nav
<section className="sticky-top">
    <nav className="navbar">
        <p className="navbar-brand mx-1 my-auto">Grow Your Own Way</p>
        <ul className=" justify-content-end my-auto mx-1">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Find Section</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#WhyGrowYourOwn">Back to Top</a></li>
                    <li><a className="dropdown-item" href="#GrowthCycle">Growth Cycle</a></li>
                    <li><a className="dropdown-item" href="#CannabisAnatomy">C. Anatomy</a></li>
                    <li><a className="dropdown-item" href="#Hygiene">Hygiene</a></li>
                    <li><a className="dropdown-item" href="#Cultivation">Cultivation</a></li>
                    <li><a classname="dropdown-item" href="#Tips">Tips & Tricks!</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</section>
        )
}