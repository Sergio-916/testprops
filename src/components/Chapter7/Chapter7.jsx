import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';

function useCharterPosition(step) {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "ArrowLeft":
                    setLeft((prev) => prev - step);
                    break;
                case "ArrowRight":
                    setLeft((prev) => prev + step);
                    break;
                case "ArrowUp":
                    setTop((prev) => prev - step);
                    break;
                case "ArrowDown":
                    setTop((prev) => prev + step);
                    break;
            }
        }
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [step]);

    return [left, top];
};

const initialStyle = {
    backgroundColor: 'red',
    position: 'absolute',
    width: 100,
    height: 100,
    left: 0,
    top: 0,
}

function generateGummies(count) {
    const dummies =[];
    for (let i = 0; i < count; i++) {
        dummies.push(<div key={i}>i == {i}</div>)
    }
    return dummies;

}

export function Example() {
    const [left, top] = useCharterPosition(50);
    // const [style, setStyle] = useState(initialStyle);

const style = useMemo(() => {
return {
    ...initialStyle,
    left,
    top,
}
}, [left, top])

    // useLayoutEffect(() => {
    //     setStyle((prev) => {
    //         return {
    //             ...prev,
    //             left,
    //             top,
    //         }
    //     })
    // }, [left, top])

    return (
        <>
            <h2>
                [{left}, {top}]
            </h2>
            <div style={style} />
            {generateGummies(15000)}
        </>
    )
};

