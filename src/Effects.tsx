import { useState, useEffect } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [msg, setMsg] = useState(-1);
    const callback = (id: number) => {
        setMsg(id);
    };
    useEffect(() => {
        subscribe(props.sourceId, callback);
        return () => {
            setMsg(-1);
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {msg}
        </div>
    );
}
