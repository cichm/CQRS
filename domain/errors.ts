// todo DomainError
const makeError = (error) => () => {
  return new Error(error)
};

export default {
    permissionDenied: makeError('PERMISSION_DENIED')
}