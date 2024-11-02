export type RootStackParamList = {
  '(tabs)': undefined;
  details: { id: number };
  modal: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
