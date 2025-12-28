import { useState, useEffect, useRef} from 'react'

function Mutableref() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        window.clearInterval(intervalRef.current!);
    };

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => {
            stopTimer();
        }
    }, []);
  return (
    <div>HookTimer - {timer} - 
    <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}

export default Mutableref