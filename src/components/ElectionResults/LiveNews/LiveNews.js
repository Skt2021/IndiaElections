import React,{useState} from 'react';
import { useSpring, animated } from "react-spring";

import "./LiveNews.css";

function LiveNews() {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(60%,0)" },
        to: { transform: "translate(-60%,0)" },
        config: { duration: 12000 },
        reset: true,
        //reverse: key % 2 == 0,
        onRest: () => {
        setKey(key + 1);
        }
    });

    return (
        <div key={key}>
        <animated.div style={scrolling}>West Bengal Elections 2021</animated.div>);
        </div>
    );
}

export default LiveNews;
