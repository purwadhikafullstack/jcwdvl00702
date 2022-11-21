import axios from "axios"
import "../assets/styles/addressShipping.css"
import {useState,useEffect,useContext} from "react"
import {ArrowBack,LocalShipping,FlightTakeoff,Inventory,HomeRepairService} from "@mui/icons-material"
import {Link} from "react-router-dom"
import {Container} from "@mui/material"

export default function ChooseShipping(){

    const shippingCard=(
        <div className="ship-choice">
            <div className="ship-method">
                <Inventory style={{fill: "black"}}/>
                <div className="ship-choice-text">
                    <div className="ship-choice-title">Express</div>
                    <div className="ship-choice-spec">Estimated Arrival Today</div>
                </div>
            </div>
            <div className="ship-select-dot">
                <div className="ship-fee">$10</div>
                <div className="ship-selector"><input type="radio" className="ship-radio" name="shipradio" /></div>
            </div>
        </div>
    )

    return(
        <div className="ship-wrapper">
            <Container className="ship-container" maxWidth="xs">
                <div className="ship-topside">
                    <div className="ship-arrowwrap">
                        <Link to ="/">
                            <button className="ship-arrowback"><ArrowBack/></button>
                        </Link>
                    </div>
                    <div className="ship-title">Choose Shipping</div>
                </div>
                <div className="ship-subwrap">
                    <div className="ship-select">
                        {shippingCard}
                        <div className="ship-choice">
                            <div className="ship-method">
                                <HomeRepairService style={{fill: "black"}}/>
                                <div className="ship-choice-text">
                                    <div className="ship-choice-title">Express</div>
                                    <div className="ship-choice-spec">Estimated Arrival Today</div>
                                </div>
                            </div>
                            <div className="ship-select-dot">
                                <div className="ship-fee">$15</div>
                                <div className="ship-selector"><input type="radio" className="ship-radio" name="shipradio" /></div>
                            </div>
                        </div>
                        <div className="ship-choice">
                            <div className="ship-method">
                                <LocalShipping style={{fill: "black"}}/>
                                <div className="ship-choice-text">
                                    <div className="ship-choice-title">Express</div>
                                    <div className="ship-choice-spec">Estimated Arrival Today</div>
                                </div>
                            </div>
                            <div className="ship-select-dot">
                                <div className="ship-fee">$20</div>
                                <div className="ship-selector"><input type="radio" className="ship-radio" name="shipradio" /></div>
                            </div>
                        </div>
                        <div className="ship-choice">
                            <div className="ship-method">
                                <FlightTakeoff style={{fill: "black"}}/>
                                <div className="ship-choice-text">
                                    <div className="ship-choice-title">Express</div>
                                    <div className="ship-choice-spec">Estimated Arrival Today</div>
                                </div>
                            </div>
                            
                            <div className="ship-select-dot">
                                <div className="ship-fee">$40</div>
                                <div className="ship-selector"><input type="radio" className="ship-radio" name="shipradio" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="ship-continue">
                        <button className="ship-button">Apply</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
