import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "jalali-moment";
import Header from "../../components/header/Header";
import Chart from "../../components/chart/Chart";
import FutureEvents from "../../components/future-events/FutureEvents";
import "./Dashboard.css";


const Dashboard = ({showMenu, setShowMenu}) => {

    const [chartData, setChartData] = useState([]);
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        getChartData();
        getEventsData();
    }, []);

    const getChartData = () => {
        axios
            .get("https://vo2.ir/api/getChartsData",
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(response => {
                const chartData = response.data.data.map(data => {
                    data.ctl = data.ctl.toFixed(2)
                    const enDate = data.workoutDay.slice(0, 10).replaceAll("-", "/");
                    const faDate = moment(enDate).locale("fa").format("D MMMM YYYY");
                    data.workoutDay = faDate;
                    return data;
                });
                setChartData(chartData);
            })
            .catch(() => {
                alert("!خطای غیرمنتظره‌ای رخ داد");
            });
    };

    const getEventsData = () => {
        axios
            .get("https://vo2.ir/api/getEvents",
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            .then(response => {
                const eventsData = response.data.data.map(eventData => {
                    const enDate = moment.from(eventData.event_date, "fa", "YYYY-MM-DD").format('YYYY/MM/DD');
                    const faDate = moment(enDate).locale("fa").format("D MMMM");
                    eventData.event_date = faDate;
                    return eventData;
                });
                [eventsData[3], eventsData[4]] = [eventsData[4], eventsData[3]];
                setEventsData(eventsData);
            })
            .catch(() => {
                alert("!خطای غیرمنتظره‌ای رخ داد");
            });
    };

    return (
        <main className="dashboard-container">
            <Header showMenu={showMenu} setShowMenu={setShowMenu} />
            <hr />
            <Chart chartData={chartData} eventsData={eventsData} />
            <FutureEvents eventsData={eventsData} />
        </main>
    );
};


export default Dashboard;