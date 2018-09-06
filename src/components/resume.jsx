import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import './resume.css';
import resume from '../pdf/Resume-2018.pdf';
import downloadIcon from '../icons/arrow-circle-down.svg'

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <section className='content'>
                <span className="breadcrumbs">
                    <Link to="/">Home</Link> > <b>Resume</b>
                </span>
                <div className="buttons">
                    <button className="pdf">PDF<img src={downloadIcon} alt="pdf download"/></button>
                    <button className="word">Word<img src={downloadIcon} alt="pdf download"/></button>
                </div>
                <div className="pdf-content">
                    <Document
                        file={resume}
                        onLoadSuccess={this.onDocumentLoad}
                        loading=""
                    >
                        <Page className="pdf"
                            pageNumber={pageNumber}
                            scale={2}
                        />
                    </Document>
                </div>
            </section>
        )
    }
}

export default Resume