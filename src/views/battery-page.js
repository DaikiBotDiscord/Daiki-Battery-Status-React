import React from 'react'

import { Helmet } from 'react-helmet'

import './battery-page.css'

const BatteryPage = (props) => {
  return (
    <div className="battery-page-container10">
      <Helmet>
        <title>Battery Status</title>
      </Helmet>
      <div className="battery-page-container11">
        <div className="battery-page-battery1">
          <span className="battery-page-text10">DNS Server</span>
          <div className="battery-page-container12">
            <div className="battery-page-container13"></div>
            <div className="battery-page-container14">
              <div className="battery-page-container15"></div>
              <div className="battery-page-container16"></div>
              <div className="battery-page-container17"></div>
              <div className="battery-page-container18"></div>
            </div>
          </div>
        </div>
        <div className="battery-page-info1">
          <span className="battery-page-text11">DNS Server</span>
          <div className="battery-page-container19">
            <div className="battery-page-container20">
              <div className="battery-page-container21">
                <span className="battery-page-text12">Info</span>
                <div className="battery-page-container22">
                  <span className="battery-page-text13">Battery ##%</span>
                </div>
                <div className="battery-page-container23">
                  <span className="battery-page-text14">Online</span>
                </div>
                <div className="battery-page-container24">
                  <span className="battery-page-text15">### Volts In</span>
                </div>
                <div className="battery-page-container25">
                  <span className="battery-page-text16">### Min. Left</span>
                </div>
                <div className="battery-page-container26">
                  <span className="battery-page-text17">Status Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="battery-page-info2">
          <span className="battery-page-text18">Daiki Server</span>
          <div className="battery-page-container27">
            <div className="battery-page-container28">
              <div className="battery-page-container29">
                <span className="battery-page-text19">Info</span>
                <div className="battery-page-container30">
                  <span className="battery-page-text20">Battery ##%</span>
                </div>
                <div className="battery-page-container31">
                  <span className="battery-page-text21">Online</span>
                </div>
                <div className="battery-page-container32">
                  <span className="battery-page-text22">### Volts In</span>
                </div>
                <div className="battery-page-container33">
                  <span className="battery-page-text23">### Min. Left</span>
                </div>
                <div className="battery-page-container34">
                  <span className="battery-page-text24">Status Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="battery-page-battery2">
          <span className="battery-page-text25">Daiki Server</span>
          <div className="battery-page-container35">
            <div className="battery-page-container36"></div>
            <div className="battery-page-container37">
              <div className="battery-page-container38"></div>
              <div className="battery-page-container39"></div>
              <div className="battery-page-container40"></div>
              <div className="battery-page-container41"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BatteryPage
