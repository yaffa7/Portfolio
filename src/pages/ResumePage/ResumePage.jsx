import React, { Component } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import './ResumePage.css';
import resumepdf from '../../pdf/Resume-2018.pdf';
import resumedocx from '../../docx/Resume-2018.docx'
import downloadIcon from '../../icons/arrow-circle-down.svg'

class ResumePage extends Component {
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
                <BreadCrumbs currentpage="Resume"/>
                <div className="buttons">
                    <a href={resumepdf} download>
                        <div className="download-btn pdf">pdf<img src={downloadIcon} alt="pdf download"/></div>
                    </a>
                    <a href={resumedocx} download>
                        <div className="download-btn word">Word<img src={downloadIcon} alt="word download"/></div>
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

export default ResumePage