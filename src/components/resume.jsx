import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import './resume.css';
import resumepdf from '../pdf/Resume-2018.pdf';
import resumedocx from '../docx/Resume-2018.docx'
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
                    <Link to="/">Home</Link> >
                    <span className="current-page">
                        Resume
                    </span>
                </span>
                <div className="buttons">
                    <a href={resumepdf} download>
                        <div className="pdf">pdf<img src={downloadIcon} alt="pdf download"/></div>
                    </a>
                    <a href={resumedocx} download>
                        <div className="word">Word<img src={downloadIcon} alt="word download"/></div>
                    </a>
                </div>
                <div className="pdf-content">
                    <Document
                        file={resumepdf}
                        onLoadSuccess={this.onDocumentLoad}
                        loading="Loading..."
                    >
                        <Page className="pdf-page"
                            pageNumber={pageNumber}
                            scale={2}
                            renderMode="svg"
                        />
                    </Document>
                </div>
            </section>
        )
    }
}

export default Resume