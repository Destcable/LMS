import dataHeader from '../../data/data.json';

const Header = () => {
    
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
        backgroundColor: dataHeader.bottomLineColor,
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
        <header className="d-flex flex-column align-items-center w-100" style={{ backgroundColor: dataHeader.topLineColor }}>
            <div className="container d-flex flex-row">
                <div className="position-absolute mt-4" style={styleLogo}>
                    Logo
                </div>
                <div className="d-flex flex-column w-100" style={ml90}>
                    <div className="d-flex flex-wrap w-100 justify-content-between">
                        <div className="pt-2">
                            <h2 className="text-white">{dataHeader.title}</h2>
                        </div>
                        <div className="d-flex align-items-center mt-10">
                            {dataHeader.isButton_InfoContent &&
                                <a href="/" className="btn-contacts rounded-3 fw-bold text-white text-decoration-none" style={styleButton}>
                                    Информация о контенте
                                </a>
                            }
                            {dataHeader.isButton_KeyWords &&
                                <a href='/' className="btn-words rounded-3 fw-bold text-white text-decoration-none" style={styleButton}>
                                    Ключевые слова
                                </a>
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className='position-absolute fw-bold' style={styleSubtitle}>{dataHeader.topic}</h3>
                    </div>
                </div>
            </div>
            <div className="position-absolute w-100" style={styleHeaderSecond}></div>
        </header>
    )
}

export default Header;