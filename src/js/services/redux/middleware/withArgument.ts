interface Argument {
  [key: string]: any
}

/**
 * adds the given argument to the action's meta property
 */
const withArgument = (argument: Argument) => (store: any) => (
  next: Function
) => (action: any) => {
  const meta = action.meta || {}
  const nextMeta = { ...meta, ...argument }
  const nextAction = { ...action, meta }
  return next(nextAction)
}

export default withArgument
