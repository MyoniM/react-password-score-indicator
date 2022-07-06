import React, { CSSProperties } from 'react';
import './baseStyles.css';

interface IReactStrengthMeterProps {
    className?: string;
    style?: CSSProperties;
    scoreWordClassName?: string;
    scoreWordStyle?: CSSProperties;
    password: string;
    userInputs?: string[];
    barColors?: string[];
    minLength?: number;
}

export const ReactStrengthMeter: React.FunctionComponent<IReactStrengthMeterProps> = (props) => {
    const { password } = props;

    /** Override Defaults */

    return <div>{password}</div>;
};
