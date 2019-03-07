import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'
import withFormControl from './FormControl'
import theme from './theme'


const Checkbox = ({
  name,
  value,
  label,
  required,
  setValue,
  classes,
}) =>
  <label className={classes.label} htmlFor={name}>
    <input
      type='checkbox'
      name={name}
      className={classes.input}
      id={name}
      checked={value}
      onChange={e => setValue(name, e.target.checked, required)}
    /> {label}
  </label>

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
}

export const checkboxTheme = {
  label: {
    display: 'flex',
    position: 'relative',
    textAlign: 'left',
    alignItems: 'flex-start',
    cursor: 'pointer',
  },
  input: {
    margin: '.1em 10px 0 0',
    position: 'relative',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: 14,
      height: 14,
      top: 0,
      left: 0,
      backgroundColor: theme.formItemBgColor,
      cursor: 'pointer',
      border: `2px solid ${theme.formItemBorderColor}`,
      borderRadius: 2,
    },
    '&:checked': {
      '&::before': {
        backgroundColor: theme.brandPrimary,
        border: `2px solid ${theme.brandPrimary}`,
      },
      '&::after': {
        content: '"✓"',
        display: 'block',
        fontFamily: 'monospace',
        position: 'absolute',
        width: 16,
        height: 16,
        lineHeight: '16px',
        top: 1,
        left: 1,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        cursor: 'pointer',
      },
    },
  },
}

export default withFormControl(withStyles(checkboxTheme)(Checkbox))