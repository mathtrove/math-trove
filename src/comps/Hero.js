import './Hero.css';

const Hero = (props) => {
    return (
        <section className='Hero-sec'>
            <nav>
                <a href='https://linktr.ee'>Home</a>
                <a href='https://linktr.ee'>Categories</a>
                <a href='https://linktr.ee'>About</a>
                <a href='https://linktr.ee' className='cta'>Buy full version</a>
            </nav>
            <div>
                <h1 className='hero-h1'>{props.heading}</h1>
                <p className='hero-p'>A huge math library of mathematical formulas.</p>
            </div>
        </section>
    )
}

export default Hero;