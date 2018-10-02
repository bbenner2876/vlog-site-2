import React, { Component } from 'react';
import './template.scss';


class template extends Component {
  render() {
    return (
        <div className="grid-container">            
            <header>
                <h1>ANNA SAECHOU</h1>
                <h3>
                    YouTuber extraordinaire and Tomo No Hot Stuff!
                </h3>
                <h3>
                    Yeah that’s me bruv. I like pink things if you couldn’t tell.
                </h3>
            </header>
            <section className="featured-video">
                <div className="featured-text">
                    <h4>Check out my latest video on my channel</h4>
                    <p>I made it all by myself and I am really proud.</p>
                </div>
                <div className="video">
                    <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/I6oMD-Olp2s?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                    </iframe>
                </div>
            </section>

            <section className="video-section">
                <h2>My Videos</h2>
                <div className="flex-container">
                    <div className="video">
                        <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/yoepxtgpXKo?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video">
                        <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/I6oMD-Olp2s?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video">
                        <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/WPorhzKkMr8?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video">
                        <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/PB5trxl2rWY?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video">
                        <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/koTevaLFiAc?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video">
                        <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/95qd59e-MaU?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="video">
                        <iframe title="university-apply" align="middle" width="460" height="315" src="https://www.youtube.com/embed/CBKn14Knliw?autoplay=0&controls=1&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                        </iframe>
                    </div>


                </div>
            </section>
        </div>
    );
  }
}

export default template; // Don’t forget to use export default!