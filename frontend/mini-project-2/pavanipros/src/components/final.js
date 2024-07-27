import './final.css';
import React, { useEffect } from 'react';
import moon from '../assets/sky.png';
// import './final.js'; // This line seems unnecessary, check if it's needed
// import sky from '';
import mountain from '../assets/mountain (2).png';
import GlassNavbar from './GlassNavbar.jsx';
import telescope from '../assets/telescope.png';
import nightsky from '../assets/night.jpg';

const Final = () => {
    useEffect(() => {
        const handleScroll = () => {
            let text = document.getElementById('text');
            let moon = document.getElementById('moon');
            let telescope = document.getElementById('telescope');
            let mountain = document.getElementById('mountain');
            let night = document.getElementById('night');

            let value = window.scrollY;
            if (text) {
                text.style.left = value * -2.5 + 'px';
                text.style.top = value * 0.4 + 'px';
            }
            if (telescope) {
                telescope.style.top = value * 1 + 'px';
                telescope.style.left = value * 1 + 'px';
            }
            if (night) {
                night.style.top = value * 0.5 + 'px';
                night.style.left = value * 0.5 + 'px';
            }
            // Add similar checks for other elements if needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <GlassNavbar />
            <div className="parallaxbody">
                <section className="parallax">
                    {/*<img src={sky} id="sky"/>*/}
                    <img src={moon} id="moon" />
                    <img src={nightsky} id="night" />
                    <h2 id="text">Welcome</h2>
                    <img src={telescope} id="telescope" />
                    <img src={mountain} id="mountain" />
                </section>
                <section className="sec">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Dolorem non repellat tempora totam, ea ab, itaque
                        error molestiae architecto saepe a ullam, veniam
                        cupiditate nemo! Voluptas omnis velit, aliquid delectus
                        perspiciatis aspernatur alias sequi molestias magnam
                        sint blanditiis debitis doloremque ad ducimus nam natus
                        consectetur modi! Doloremque vitae cum beatae assumenda.
                        Aut possimus tenetur expedita facilis neque ducimus
                        consequuntur culpa dicta distinctio commodi reiciendis
                        accusantium iusto, cumque cupiditate obcaecati odit
                        magni. At vero optio itaque quisquam tempora similique
                        deleniti autem dolore aspernatur suscipit omnis
                        delectus inventore doloribus natus veritatis aperiam
                        voluptates recusandae qui, magni mollitia fugit labore
                        iure. Nesciunt, blanditiis.
                    </p>
                </section>
            </div>
        </>
    );
};

export default Final;
