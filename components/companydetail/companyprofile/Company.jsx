 
import { useState, useEffect } from 'react'
import CompanyProfileCards from './CompanyProfileCards'

const Company = ({ profile, shares }) => {
     
    const [styles, setStyles] = useState("")
    const [betaclass, setbetaclass] = useState("")


    useEffect(() => {

        let capital = profile?.mktcap
        let c = capital?.replace('$', '')
        let x = c?.split(",")
        let i = x?.join("")
        let b = Number(i)

        if (b >= 200000000000) {
            setStyles("MarketCapitalizationOne")

        }
        if (b > 10000000000 && b < 200000000000) {
            setStyles("MarketCapitalizationTwo")

        }
        if (b > 2000000000 && b < 10000000000) {
            setStyles("MarketCapitalizationThree")

        }



        if (profile?.beta < 1 && profile?.beta > 0) {
            setbetaclass("betaclassone")
        }
        if (profile?.beta > 1.2) {
            setbetaclass("betaclasstwo")
        }

        if (profile?.beta > 1 && profile?.beta < 1.2) {
            setbetaclass("betaclassthree")
        }

        if (profile?.beta < 0) {
            setbetaclass("betaclassfour")
        }
    }, [profile])
    const l = profile?.companyname?.replace('.', '')
    return (
        <>
            <div className="CompanySection_abcd pt-5_abcd pb-5_abcd">
                <div className="abcd_container">
                    <div className='companyname_abcd'>
                        <h2 className="h2_abcd blue-color_abcd abcd_row abcd_justify-center text-center_abcd mb-3_abcd abcd-h2">{l}<span
                            className="colored_abcd">.</span>
                         </h2>
                        <div className='tickerrate_abcd'>
                            <div className='tickergreenline_abcd'></div>
                            <div className='tickername_abcd'>
                                <div>
                                    <h3 className='tickerUpperheading_abcd'>Microsoft Corporation</h3>
                                </div>
                                <div>
                                    <h2 className='tickerdown_abcd'>MSFT
                                        <span className='tickerdollarsign_abcd'>$</span>310.20
                                        <i className="fas fa-arrow-up ticker_name_icon_arrow"></i>
                                        <span className='tickercomapnypercentage_abcd'>5.40
                                            1.77%</span>
                                    </h2>
                                </div>
                            </div>
                        </div>

                    </div>

                  <CompanyProfileCards cardData={{...profile, ...shares}} conditionClass={[styles,betaclass]}/>

                </div>
            </div>
        </>
    )
}

export default Company
