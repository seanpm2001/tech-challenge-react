import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useThemeVariants } from '@material-ui/styles';
import withStyles from '../styles/withStyles';
import ButtonBase from '../ButtonBase';
import capitalize from '../utils/capitalize';

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    ...theme.typography.button,
    minHeight: 36,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
      duration: theme.transitions.duration.short,
    }),
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    boxShadow: theme.shadows[6],
    '&:active': {
      boxShadow: theme.shadows[12],
    },
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    backgroundColor: theme.palette.grey[300],
    '&:hover': {
      backgroundColor: theme.palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.grey[300],
      },
      textDecoration: 'none',
    },
    '&$focusVisible': {
      boxShadow: theme.shadows[6],
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      boxShadow: theme.shadows[0],
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  /* Styles applied to the span element that wraps the children. */
  label: {
    width: '100%', // assure the correct width for iOS Safari
    display: 'inherit',
    alignItems: 'inherit',
    justifyContent: 'inherit',
  },
  /* Styles applied to the root element if `color="primary"`. */
  primary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  /* Styles applied to the root element if `color="secondary"`. */
  secondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  },
  /* Styles applied to the root element if `variant="extended"`. */
  extended: {
    borderRadius: 48 / 2,
    padding: '0 16px',
    width: 'auto',
    minHeight: 'auto',
    minWidth: 48,
    height: 48,
    '&$sizeSmall': {
      width: 'auto',
      padding: '0 8px',
      borderRadius: 34 / 2,
      minWidth: 34,
      height: 34,
    },
    '&$sizeMedium': {
      width: 'auto',
      padding: '0 16px',
      borderRadius: 40 / 2,
      minWidth: 40,
      height: 40,
    },
  },
  /* Styles applied to the root element if `variant="circular"`. */
  circular: {},
  /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
  focusVisible: {},
  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},
  /* Styles applied to the root element if `color="inherit"`. */
  colorInherit: {
    color: 'inherit',
  },
  /* Styles applied to the root element if `size="small"``. */
  sizeSmall: {
    width: 40,
    height: 40,
  },
  /* Styles applied to the root element if `size="medium"``. */
  sizeMedium: {
    width: 48,
    height: 48,
  },
});

const Fab = React.forwardRef(function Fab(props, ref) {
  const {
    children,
    classes,
    className,
    color = 'default',
    component = 'button',
    disabled = false,
    disableFocusRipple = false,
    focusVisibleClassName,
    size = 'large',
    variant = 'circular',
    ...other
  } = props;

  const themeVariantsClasses = useThemeVariants(
    {
      ...props,
      color,
      component,
      disabled,
      disableFocusRipple,
      size,
      variant,
    },
    'MuiFab',
  );

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        classes[variant],
        {
          [classes.primary]: color === 'primary',
          [classes.secondary]: color === 'secondary',
          [classes[`size${capitalize(size)}`]]: size !== 'large',
          [classes.disabled]: disabled,
          [classes.colorInherit]: color === 'inherit',
        },
        themeVariantsClasses,
        className,
      )}
      component={component}
      disabled={disabled}
      focusRipple={!disableFocusRipple}
      focusVisibleClassName={clsx(classes.focusVisible, focusVisibleClassName)}
      ref={ref}
      {...other}
    >
      <span className={classes.label}>{children}</span>
    </ButtonBase>
  );
});

Fab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
    PropTypes.oneOf(['circular', 'extended']),
    PropTypes.string,
  ]),
};

export default withStyles(styles, { name: 'MuiFab' })(Fab);