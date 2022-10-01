import styled from '@emotion/styled';

export const TextFieldWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    svg {
        width: 26px;
        height: auto;
        color: #002869;
    }
`

export const TextFieldError = styled.span`
    color: #d84244;
    position: absolute;
    bottom: -20px;
    font-size: 12px;
`
