export const selectAdverts = state => state.adverts.adverts;

export const selectAdvertsLoading = state => state.adverts.isLoading;

export const selectAdvertsError = state => state.adverts.error;

export const selectFavorites = state =>
  state.adverts && state.adverts.favorites;
