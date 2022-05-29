import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

type colorProps = 'primary' | 'secondary' | 'cancel';
type variantProps = 'contained' | 'outlined' | 'bordered';
type sizeProps = 'small' | 'medium' | 'large';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: colorProps;
  variant?: variantProps;
  size?: sizeProps;
  focused?: boolean;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  loading?: boolean;
  loadingICon?: React.ReactNode;
}

type StyledButtonProps = Omit<
  ButtonProps,
  'children' | 'rightIcon' | 'leftIcon' | 'loading' | 'loadingICon'
>;

type colorVariantProps = Exclude<
  `${colorProps}${variantProps}`,
  'primary-contained'
>;

const largeButton = css`
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.5625rem;
`;

const mediumButton = css`
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const smallButton = css`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const primaryContainedButton = css<StyledButtonProps>`
  ${(props) => `
  color: ${props.theme?.palette?.primary ?? '#ffffff'};
  background-color: ${props.theme?.palette?.primary ?? '#1b62f8'};
  ${
    props.disabled
      ? ''
      : `
          &:hover {
            background-color: ${
              props.theme?.palette
                ? props.theme.palette?.primary + '80'
                : '#558afa'
            };
          }
          
          &:active {
            background-color: ${props.theme?.palette?.primary ?? '#0a4fde'};
          }
          ${
            props.focused
              ? `
                  box-shadow: 0 0 0 3px ${
                    props.theme?.palette?.primary ?? 'rgba(193, 205, 221, 0.5)'
                  };
                `
              : ''
          }
        `
  }
  `}
`;

const primaryOutlinedButton = css<StyledButtonProps>`
  ${(props) => `
color: ${props.theme?.palette?.primary ?? '#1b62f8'};
background-color: ${props.theme?.palette?.primary ?? '#e3ecfe'};
${
  props.disabled
    ? ''
    : `
        &:hover {
          background-color: ${
            props.theme?.palette
              ? props.theme.palette?.primary + '80'
              : '#1b62f8'
          };
          color: ${
            props.theme?.palette
              ? props.theme.palette?.primary + '80'
              : '#ffffff'
          };
        }
        
        &:active {
          background-color: ${props.theme?.palette?.primary ?? '#0a4fde'};
        }
        ${
          props.focused
            ? `
                box-shadow: 0 0 0 1px ${
                  props.theme?.palette?.primary ?? '#1b62f8'
                };
                background-color: ${
                  props.theme?.palette
                    ? props.theme.palette?.primary
                    : '#e3ecfe'
                };
                color: ${
                  props.theme?.palette
                    ? props.theme.palette?.primary
                    : '#1b62f8'
                };
              `
            : ''
        }
      `
}
`}
`;

const secondaryContainedButton = css<StyledButtonProps>`
  ${(props) => `
  color: ${props.theme?.palette?.primary ?? '#ffffff'};
  background-color: ${props.theme?.palette?.primary ?? '#04bfbf'};
  ${
    props.disabled
      ? ''
      : `
          &:hover {
            background-color: ${
              props.theme?.palette
                ? props.theme.palette?.primary + '80'
                : '#43cfcf'
            };
          }
          
          &:active {
            background-color: ${props.theme?.palette?.primary ?? '#06a1a1'};
          }
          ${
            props.focused
              ? `
                  box-shadow: 0 0 0 3px ${
                    props.theme?.palette?.primary ?? '#c0efef'
                  };
                `
              : ''
          }
        `
  }
  `}
`;

const secondaryOutlinedButton = css<StyledButtonProps>`
  ${(props) => `
color: ${props.theme?.palette?.primary ?? '#04bfbf'};
background-color: ${props.theme?.palette?.primary ?? '#e0f7f7'};
${
  props.disabled
    ? ''
    : `
        &:hover {
          background-color: ${
            props.theme?.palette
              ? props.theme.palette?.primary + '80'
              : '#04bfbf'
          };
          color: ${
            props.theme?.palette
              ? props.theme.palette?.primary + '80'
              : '#ffffff'
          };
        }
        
        &:active {
          background-color: ${props.theme?.palette?.primary ?? '#06a1a1'};
        }
        ${
          props.focused
            ? `
                box-shadow: 0 0 0 1px ${
                  props.theme?.palette?.primary ?? '#04bfbf'
                };
                background-color: ${
                  props.theme?.palette
                    ? props.theme.palette?.primary
                    : '#e0f7f7'
                };
                color: ${
                  props.theme?.palette
                    ? props.theme.palette?.primary
                    : '#04bfbf'
                };
              `
            : ''
        }
      `
}
`}
`;

const secondaryBorderedButton = css<StyledButtonProps>`
  ${(props) => `
color: ${props.theme?.palette?.primary ?? '#04bfbf'};
background-color: ${props.theme?.palette?.primary ?? '#ffffff'};
box-shadow: 0 0 0 1px ${props.theme?.palette?.primary ?? '#04bfbf'};
${
  props.disabled
    ? ''
    : `
        &:hover {
          background-color: ${
            props.theme?.palette
              ? props.theme.palette?.primary + '80'
              : '#e0f7f7'
          };
          color: ${
            props.theme?.palette
              ? props.theme.palette?.primary + '80'
              : '#04bfbf'
          };
          box-shadow: none;
        }
        
        &:active {
          background-color: ${props.theme?.palette?.primary ?? '#c0efef'};
          color: ${
            props.theme?.palette
              ? props.theme.palette?.primary + '80'
              : '#04bfbf'
          };
          box-shadow: none;
        }
        ${
          props.focused
            ? `
                color: ${props.theme?.palette?.primary ?? '#04bfbf'};
                background-color: ${
                  props.theme?.palette?.primary ?? 'rgba(224, 247, 247, 0.5)'
                };
                box-shadow: 0 0 0 1px ${
                  props.theme?.palette?.primary ?? '#04bfbf'
                };
              `
            : ''
        }
      `
}
`}
`;

const cancelContainedButton = css<StyledButtonProps>`
  ${(props) => `
  color: ${props.theme?.palette?.primary ?? '#738297'};
  background-color: ${props.theme?.palette?.primary ?? '#eff3fa'};
  ${
    props.disabled
      ? ''
      : `
          &:hover {
            background-color: ${
              props.theme?.palette
                ? props.theme.palette?.primary + '80'
                : 'rgba(193, 205, 221, 0.5)'
            };
          }
          
          &:active {
            background-color: ${props.theme?.palette?.primary ?? '#f6f8fc'};
            color: ${props.theme?.palette?.primary ?? '#c1cddd'};
          }
          ${
            props.focused
              ? `
                  box-shadow: 0 0 0 1px ${
                    props.theme?.palette?.primary ?? '#d5dfed'
                  };
                `
              : ''
          }
        `
  }
  `}
`;

const cancelOutlinedButton = css<StyledButtonProps>`
  ${(props) => `
  color: ${props.theme?.palette?.primary ?? '#a1b1c7'};
  background-color: transparent;
  ${
    props.disabled
      ? ''
      : `
          &:hover {
            background-color: ${
              props.theme?.palette
                ? props.theme.palette?.primary + '80'
                : '#f6f8fc'
            };
          }
          
          &:active {
            background-color: ${props.theme?.palette?.primary ?? '#f6f8fc'};
            color: ${props.theme?.palette?.primary ?? '#c1cddd'};
          }
          ${
            props.focused
              ? `
                  box-shadow: 0 0 0 1px ${
                    props.theme?.palette?.primary ?? '#d5dfed'
                  };
                `
              : ''
          }
        `
  }
  `}
`;

const sizeObj = {
  large: largeButton,
  medium: mediumButton,
  small: smallButton,
};

const colorObj = {
  primarycontained: primaryContainedButton,
  primaryoutlined: primaryOutlinedButton,
  primarybordered: primaryOutlinedButton,
  secondarycontained: secondaryContainedButton,
  secondaryoutlined: secondaryOutlinedButton,
  secondarybordered: secondaryBorderedButton,
  cancelcontained: cancelContainedButton,
  canceloutlined: cancelOutlinedButton,
  cancelbordered: cancelOutlinedButton,
};

const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  outline: none;
  font-weight: bold;
  transition: all 0.1s linear;
  height: fit-content;

  // disabled styles
  &:disabled {
    opacity: 0.5;
    cursor: unset;
  }

  ${(props) => sizeObj[props.size ?? 'medium']}
  ${(props) => {
    const colorVariant = ((props.color ?? 'primary') +
      (props.variant ?? 'contained')) as colorVariantProps;
    return colorObj[colorVariant];
  }}
`;

const RightIcon = styled.span<StyledButtonProps>`
  margin-left: 0.375rem;
`;

const LeftIcon = styled.span<StyledButtonProps>`
  margin-right: 0.375rem;
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref: any) => {
    const { children, rightIcon, leftIcon, loading, loadingICon, ...rest } = props;

    return (
      <StyledButton {...rest} ref={ref} disabled={loading ?? rest?.disabled}>
        {leftIcon && <LeftIcon>{leftIcon}</LeftIcon>}
        {children}
        {rightIcon && <RightIcon>{rightIcon}</RightIcon>}
        {loading && <RightIcon>{loadingICon ?? <span>...</span>}</RightIcon>}
      </StyledButton>
    );
  }
);

StyledButton.defaultProps = {
  color: 'primary',
  size: 'medium',
  variant: 'contained',
  focused: false,
};

export default Button;
