import React, { CSSProperties, useEffect, useState } from 'react';

import zxcvbn from 'zxcvbn';

interface IReactPasswordScoreIndicatorProps {
    className?: string;
    style?: CSSProperties;
    scoreWordClassName?: string;
    scoreWordStyle?: CSSProperties;
    password: string;
    userInputs?: string[];
    barColors?: string[];
    minLength?: number;
}

const ReactPasswordScoreIndicator: React.FunctionComponent<IReactPasswordScoreIndicatorProps> = (props) => {
    const [score, setScore] = useState(0);
    const { password, minLength } = props;

    // component did mount
    useEffect(() => {
        let result = null;
        if (password.length >= (minLength ?? 0)) {
            result = zxcvbn(password, []);
            setScore(result.score);
        }
    }, []);

    /** Override Defaults */

    return <div>{score}</div>;
};
export default ReactPasswordScoreIndicator;
