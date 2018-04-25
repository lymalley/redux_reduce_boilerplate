/* this defines actions based on infixes you want, for example actionPrefix = 'ACCOUNTS' and actionInfixes = ['FETCH', 'DELETE'] will generate the following:
{
  ACCOUNTS_FETCH_REQUEST: 'ACCOUNTS_FETCH_REQUEST',
  ACCOUNTS_FETCH_COMPLETE: 'ACCOUNTS_FETCH_COMPLETE',
  ACCOUNTS_FETCH_ERROR: 'ACCOUNTS_FETCH_ERROR',
  ACCOUNTS_DELETE_REQUEST: 'ACCOUNTS_DELETE_REQUEST',
  ACCOUNTS_DELETE_COMPLETE: 'ACCOUNTS_DELETE_COMPLETE',
  ACCOUNTS_DELETE_ERROR: 'ACCOUNTS_DELETE_ERROR',
};
*/
export const defineActions = (actionPrefix, actionInfixes) =>
  actionInfixes.reduce((actionsToSet, infix) => {
    actionsToSet[`${actionPrefix}_${infix}_REQUEST`] = `${actionPrefix}_${infix}_REQUEST`;
    actionsToSet[`${actionPrefix}_${infix}_COMPLETE`] = `${actionPrefix}_${infix}_COMPLETE`;
    actionsToSet[`${actionPrefix}_${infix}_ERROR`] = `${actionPrefix}_${infix}_ERROR`;
    return actionsToSet;
  }, {});

// this returns actions for a specific infix
export const getTypes = (actionPrefix, actionInfix) =>
  ['REQUEST', 'COMPLETE', 'ERROR'].map((postfix) => `${actionPrefix}_${actionInfix}_${postfix}`);
