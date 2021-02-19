const currentNotifications = function (state, _, rootState, rootGetters) {
  const address = rootState.wallet.address;
  const currentNetworkType = rootGetters['global/network'].type.name;
  const filteredArray = state.notifications.filter(item => {
    if (item.from === address && item.network === currentNetworkType)
      return item;
  });
  return filteredArray;
};

const txNotifications = function (state, _, rootState, rootGetters) {
  const address = rootState.wallet.address;
  const currentNetworkType = rootGetters['global/network'].type.name;
  const filteredArray = state.notifications.filter(item => {
    if (
      item.from === address &&
      item.type === 'OUT' &&
      item.network === currentNetworkType
    )
      return item;
  });
  return filteredArray;
};

const swapNotifications = function (state, _, rootState, rootGetters) {
  const address = rootState.wallet.address;
  const currentNetworkType = rootGetters['global/network'].type.name;
  const filteredArray = state.notifications.filter(item => {
    if (
      item.from === address &&
      item.type === 'SWAP' &&
      item.network === currentNetworkType
    )
      return item;
  });
  return filteredArray;
};

export default { currentNotifications, txNotifications, swapNotifications };
