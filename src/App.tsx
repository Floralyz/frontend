import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Card from "./components/Footer";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>


<Nav></Nav>
        <main>

            <Welcome></Welcome>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                     xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                     preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"/>
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                </svg>

                                <div className="card-body">
                                    <p className="card-text">Enis je ful vlka kesa. Slab je u basketu pa isto navija za miami. Shooting bricks</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </main>

        <Footer></Footer>


    </>
  );
}

export default App;
