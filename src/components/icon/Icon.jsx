import React from 'react';
import styled from 'styled-components';
import { Icons } from '../../assets/images/icon/Icon';

export const Icon = ( props ) => {
    const { icon, width, height, ...rest } = props;
    
    return (
        <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" width={width} height={height} dangerouslySetInnerHTML={{ __html: Icons[icon] }} {...rest}></svg>
    )
}