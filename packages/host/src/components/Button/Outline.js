import styled, { css } from "styled-components";
import { variant } from "styled-system";
import colors from "../../../../../src/theme/colors";
import { size, iconSize, shape } from "../../../../../src/components/Button/CommonConfig";

const level = variant({
  prop: "level",
  variants: {
    primary: {
      color: colors.hostPrimary[6],
      borderColor: colors.hostPrimary[6],
      "&:not(:disabled):hover": {
        bg: colors.hostPrimary[0],
      },
      "&:not(:disabled):active": {
        bg: colors.hostPrimary[1],
      },
      "&:not(:disabled):focus": {
        boxShadow: `0 0 0 2px ${colors.hostPrimary[6]}48`,
      },
    },
    danger: {
      color: colors.oranges[5],
      borderColor: colors.oranges[5],
      "&:not(:disabled):hover": {
        bg: colors.oranges[0],
      },
      "&:not(:disabled):active": {
        bg: colors.oranges[1],
      },
      "&:not(:disabled):focus": {
        boxShadow: `0 0 0 2px ${colors.oranges[5]}48`,
      },
    },
    neutral: {
      color: colors.grays[8],
      borderColor: colors.grays[6],
      "&:not(:disabled):hover": {
        bg: colors.grays[3],
      },
      "&:not(:disabled):active": {
        bg: colors.grays[4],
      },
      "&:not(:disabled):focus": {
        boxShadow: `0 0 0 2px ${colors.grays[6]}48`,
      },
    },
  },
});

const Outline = styled.button`
  &[type] {
    background-color: ${colors.grays[0]};
    ${level}
    ${shape}
    ${(props) => css`
      ${props.isPureIcon ? iconSize : size}
    `}
    @media (hover: none) {
      &:not(:disabled):hover {
        background-color: ${colors.grays[0]};
      }
    }
  }
`;
export default Outline;
