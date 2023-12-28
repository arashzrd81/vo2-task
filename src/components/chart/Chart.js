import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Select from "react-select";
import setting from "../../assets/images/setting.svg";
import calendar from "../../assets/images/calendar.svg";
import "./Chart.css";


const Chart = ({chartData, eventsData}) => {

    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState();

    useEffect(() => {
        const temp = eventsData.map(eventData => (
            {
                value: eventData.id,
                label: eventData.name
            }
        ));
        setEvents(temp);
    }, [eventsData]);

    return (
        <div className="chart-container">
            <div className="info">
                <img src={setting} alt="" />
                <img src={calendar} alt="" />
                <Select
                    className="select-box"
                    value={event}
                    options={events}
                    onChange={e => setEvent(e)}
                    defaultValue={events[0] || {value: 1, label: "قهرمانی آسیا"}}
                    placeholder=""
                    isSearchable={false}
                    styles={{
                        control: () => ({
                            borderRadius: "8px",
                            display: "flex",
                            cursor: "pointer",
                            fontSize: "0.75rem",
                            backgroundColor: "#F0F0F0"
                        }),
                        indicatorsContainer: () => ({
                            scale: "0.7"
                        }),
                        menu: () => ({
                            width: "100%",
                            position: "absolute",
                            backgroundColor: "white"
                        }),
                        noOptionsMessage: () => ({
                            display: "none"
                        }),
                        option: (defaultStyles, state) => ({
                            ...defaultStyles,
                            cursor: "pointer",
                            fontSize: "0.75rem",
                            color: state.isFocused ? "white" : "black",
                            backgroundColor: state.isFocused ? "#FF0072" : "#F0F0F0",
                            ":hover": {
                                color: "white",
                                backgroundColor: "#FF0072"
                            }
                        })
                    }}
                />
            </div>
            {
                chartData &&
                <ResponsiveContainer className="chart-wrapper" width="100%" height={200}>
                    <AreaChart
                        data={chartData}
                    >
                        <defs>
                            <linearGradient id="linear-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF0072" stopOpacity={0.9}/>
                                <stop offset="95%" stopColor="#FF0072" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid horizontal={false} vertical={false} />
                        <XAxis dataKey="workoutDay" hide={true} />
                        <YAxis dataKey="ctl" domain={[0, 150]} hide={true} />
                        <Tooltip
                            separator=""
                            contentStyle={{
                                padding: "0.8rem 1rem 0.6rem",
                                borderRadius: "30px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                fontSize: "0.75rem"
                            }}
                            itemStyle={{
                                display: "flex",
                                columnGap: "0.2rem",
                                fontSize: "0.9rem",
                                fontWeight: "bold"
                            }}
                        />
                        <Area
                            name="CTL"
                            type="monotone"
                            dataKey="ctl"
                            stroke="#FF0072"
                            strokeWidth={2}
                            fill="url(#linear-gradient)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            }
        </div>
    );
};


export default Chart;