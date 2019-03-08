import styled from "styled-components";

export const Base = styled.div`
  ${({ disablePointerEvents }) =>
    disablePointerEvents && `pointer-events: none;`}

  & > * {
    opacity: 0;
  }
`;
