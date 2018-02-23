import findIndex from 'lodash.findindex';
import { notDispatchedActionError } from '../errors/notDispatchedActionError';

function assertDispatchedActions(dispatched, expected) {
  const availableActions = dispatched.slice();

  if (expected.length === 0 && dispatched.length > 0) {
    throw notDispatchedActionError(dispatched, expected, {});
  }

  for (let indexInExpected = 0; indexInExpected < expected.length; indexInExpected++) {
    const indexInAvailable = findIndex(availableActions, expected[indexInExpected]);

    if (indexInAvailable !== -1) {
      availableActions.splice(indexInAvailable, 1);
    } else {
      throw notDispatchedActionError(dispatched, expected, expected[indexInExpected]);
    }
  }
}

export { assertDispatchedActions };
