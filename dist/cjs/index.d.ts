import React, { CSSProperties } from 'react';
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
declare const ReactPasswordScoreIndicator: React.FunctionComponent<IReactPasswordScoreIndicatorProps>;
export default ReactPasswordScoreIndicator;
