import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import './battery-page.css';

const BatteryPage = (props) => {
  const [ups1, setUps1] = useState(null);
  const [ups2, setUps2] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await axios.get('http://192.168.0.108:3002/status/1');
        const response2 = await axios.get('http://192.168.0.108:3002/status/2');
        setUps1(response1.data);
        setUps2(response2.data);
      } catch (error) {
        console.error('Error fetching UPS data:', error);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 10000); // Refresh data every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const getBarColor = (batteryLevel, threshold) => {
    return batteryLevel >= threshold ? '#0ad000ff' : '#313030ff';
  };

  return (
    <div className="battery-page-container10">
      <Helmet>
        <title>Battery Status</title>
      </Helmet>
      <div className="battery-page-container11">
        {/* UPS 1 (DNS Server) */}
        <div className="battery-page-battery1">
          <span className="battery-page-text10">DNS Server</span>
          <div className="battery-page-container12">
            <div className="battery-page-container13"></div>
            <div className="battery-page-container14">
              {/* Start of Percentage for DNS */}
              <div className="battery-page-container15" style={{ backgroundColor: ups1 ? getBarColor(ups1.battery_level, 100) : '#313030ff' }} />
              <div className="battery-page-container16" style={{ backgroundColor: ups1 ? getBarColor(ups1.battery_level, 75) : '#313030ff' }} />
              <div className="battery-page-container17" style={{ backgroundColor: ups1 ? getBarColor(ups1.battery_level, 50) : '#313030ff' }} />
              <div className="battery-page-container18" style={{ backgroundColor: ups1 ? getBarColor(ups1.battery_level, 25) : '#313030ff' }} />
              {/* End of Percentage for DNS */}
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
                  <span className="battery-page-text13">Battery {ups1 ? ups1.battery_level : '##'}%</span>
                </div>
                <div className="battery-page-container23">
                  <span className="battery-page-text14">{ups1 ? ups1.battery_status : 'Online'}</span>
                </div>
                <div className="battery-page-container24">
                  <span className="battery-page-text15">{ups1 ? ups1.line_in_voltage : '###'} Volts In</span>
                </div>
                <div className="battery-page-container25">
                  <span className="battery-page-text16">{ups1 ? ups1.time_left : '###'} Min. Left</span>
                </div>
                <div className="battery-page-container26">
                  <span className="battery-page-text17">{ups1 ? new Date(ups1.status_time).toLocaleString() : 'Status Time'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UPS 2 (Daiki Server) */}
        <div className="battery-page-info2">
          <span className="battery-page-text18">Daiki Server</span>
          <div className="battery-page-container27">
            <div className="battery-page-container28">
              <div className="battery-page-container29">
                <span className="battery-page-text19">Info</span>
                <div className="battery-page-container30">
                  <span className="battery-page-text20">Battery {ups2 ? ups2.battery_level : '##'}%</span>
                </div>
                <div className="battery-page-container31">
                  <span className="battery-page-text21">{ups2 ? ups2.battery_status : 'Online'}</span>
                </div>
                <div className="battery-page-container32">
                  <span className="battery-page-text22">{ups2 ? ups2.line_in_voltage : '###'} Volts In</span>
                </div>
                <div className="battery-page-container33">
                  <span className="battery-page-text23">{ups2 ? ups2.time_left : '###'} Min. Left</span>
                </div>
                <div className="battery-page-container34">
                  <span className="battery-page-text24">{ups2 ? new Date(ups2.status_time).toLocaleString() : 'Status Time'}</span>
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
              {/* Start of Percentage for Daiki Server */}
              <div className="battery-page-container38" style={{ backgroundColor: ups2 ? getBarColor(ups2.battery_level, 100) : '#313030ff' }} />
              <div className="battery-page-container39" style={{ backgroundColor: ups2 ? getBarColor(ups2.battery_level, 75) : 'gray' }} />
              <div className="battery-page-container40" style={{ backgroundColor: ups2 ? getBarColor(ups2.battery_level, 50) : 'gray' }} />
              <div className="battery-page-container41" style={{ backgroundColor: ups2 ? getBarColor(ups2.battery_level, 25) : 'gray' }} />
              {/* End of Percentage for Daiki Server */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatteryPage;
