import { useEffect, useState } from 'react';


const Header = () => {
    // const [configHeader, setConfigHeader] = useState({});

    // useEffect(() => {
    //     if (!loading) { 
    //         setConfigHeader(data.getConfigHeader[0]);
    //     }
    // }, [data, loading])
    
    const styleLogo = {
        zIndex: "3",
    }

    const styleButton = {
        fontSize: "14px",
        padding: "14px 32px 25px"
    }

    const styleHeaderSecond = {
        top: "54px",
        height: "54px",
        backgroundColor: '#43698F',
        // backgroundColor: configHeader.bottomLineColor,
    }

    const styleSubtitle = {
        color: "#A2BEDD",
        fontSize: "20px",
        zIndex: 3,
    }

    const ml90 = {
        marginLeft: "90px"
    }

    return (
        <header className="d-flex flex-column align-items-center w-100" style={{ backgroundColor: 'rgb(59, 85, 113)' }}>
            <div className="container d-flex flex-row">
                <div className="position-absolute mt-4" style={styleLogo}>
                    Logo
                </div>
                <div className="d-flex flex-column w-100" style={ml90}>
                    <div className="d-flex flex-wrap w-100 justify-content-between">
                        <div className="pt-2">
                            <h2 className="text-white">Title</h2>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                                <a href="/" className="btn-contacts rounded-3 fw-bold text-white text-decoration-none" style={styleButton}>
                                    Информация о контенте
                                </a>
                                <a href='/' className="btn-words rounded-3 fw-bold text-white text-decoration-none" style={styleButton}>
                                    Ключевые слова
                                </a>
                        </div>
                    </div>
                    <div>
                        <h3 className='position-absolute fw-bold' style={styleSubtitle}>Топик</h3>
                    </div>
                </div>
            </div>
            <div className="w-100" style={styleHeaderSecond}></div>
        </header>
    )
}

export default Header;