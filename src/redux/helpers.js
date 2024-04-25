export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const checkDuplicates = (sourceList, newList) => {
  const idList = newList.map(item => item['id']);
  return sourceList.some(item => idList.includes(item['id']));
};
