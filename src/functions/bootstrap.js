import classnames from 'classnames'

export const buildUtilityClassNames = props => {
  const utilities = [
    buildMarginUtilityClassNames,
    buildPaddingUtilityClassNames,
    buildBorderUtilityClassNames,
    buildDisplayUtilityClassNames,
  ]
  let nextProps = props
  for (let utility of utilities) {
    nextProps = utility(nextProps)
  }
  return nextProps
}

const buildMarginUtilityClassNames = ({ className,
  m, mt, mr, mb, ml, mx, my, ...props }) => {
  const nextProps = {
    ...props,
    className: classnames({
      [`m-${m}`]: m || m == '0',
      [`mt-${mt}`]: mt || mt == '0',
      [`mr-${mr}`]: mr || mr == '0',
      [`mb-${mb}`]: mb || mb == '0',
      [`ml-${ml}`]: ml || ml == '0',
      [`mx-${mx}`]: mx || mx == '0',
      [`my-${my}`]: my || my == '0',
    }, className)
  }
  return nextProps
}

const buildPaddingUtilityClassNames = ({ className,
  p, pt, pr, pb, pl, px, py, ...props }) => {
  const nextProps = {
    ...props,
    className: classnames({
      [`p-${p}`]: p || p == '0',
      [`pt-${pt}`]: pt || pt == '0',
      [`pr-${pr}`]: pr || pr == '0',
      [`pb-${pb}`]: pb || pb == '0',
      [`pl-${pl}`]: pl || pl == '0',
      [`px-${px}`]: px || px == '0',
      [`py-${py}`]: py || py == '0',
    }, className)
  }
  return nextProps
}

const buildBorderUtilityClassNames = ({ className, rounded,
  border, borderTop, borderRight, borderBotton, borderLeft, ...props }) => {
  const nextProps = {
    ...props,
    className: classnames({
      [`border-${border}`] : border || border == '0',
      [`border-top-${borderTop}`] : borderTop || borderTop == '0',
      [`border-right-${borderRight}`] : borderRight || borderRight == '0',
      [`border-bottom-${borderBotton}`] : borderBotton || borderBotton == '0',
      [`border-left-${borderLeft}`] : borderLeft || borderLeft == '0',
      rounded: rounded === true,
      [`rounded-${rounded}`]: !!(rounded || rounded == 0)
    }, className)
  }
  return nextProps
}

const buildDisplayUtilityClassNames = ({ className, d, ...props }) => {
  const nextProps = {
    ...props,
    className: classnames({
      [`d-${d}`] : !!d,
    }, className)
  }
  return nextProps
}
