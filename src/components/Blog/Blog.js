import React from 'react';
// import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <h3>What is Context Api?</h3>
                    <p>Context api is one of the most important hook in react. It's produce global variables to use in any children components. Before this hooks, Developer pass the values using props drilling and that method was most complicated and time costing. But context api easy this case. Using the context api, developer can simply create a context api and can pass any type of data through api and take the value any where in the app where he needed.</p>
                </div>
                <div className='col-md-6 offset-md-3 mt-4'>
                    <h3>What are differences between Inline, Inline block and Block Elements?</h3>
                    <p><strong>Inline Elements:</strong> Inline elements means, those elements no need full the line or dosen't block the full line rather this elements only contain those place its needed. Like: img, a, span etc. <br />
                        <strong>Inline block:</strong> Inline block means, only contain its place but behave like block elements. <br />
                        <strong>Block Elements:</strong> Block elements are- those elements containe or block full the line if it need or not its called block elements. Like: h1-h6, p, div etc.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;