import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* Actions */

// export const loadSettings = createAsyncThunk('settings/load', async () => {
//   const response = await fetch('http://localhost:3001/settings');

//   const settings = await response.json();

//   return { settings };
// });

/* Selectors */

const selectSettingsState = (rootState) => rootState.settings;
export const selectSettingsList = (rootState) => selectSettingsState(rootState);
export const selectSettingsLoading = (rootState) =>
  selectSettingsState(rootState).settingsLoading;
export const selectSettingsLoadError = (rootState) =>
  selectSettingsState(rootState).error;

/* Reducer */

const initialState = {
  activeDevice: 'lg',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    callForSetting: {
      reducer: (state, action) => {
        const calledSetting = state.settings.find(
          (setting) => setting.id === action.payload.id,
        );
        calledSetting.count += 1;
      },
      prepare: (settingId) => {
        return { payload: { id: settingId } };
      },
    },
    changeDevice: (state, action) => {
      state.activeDevice = action.payload;
    },
  },

  extraReducers: {
    // [loadSettings.pending]: (state) => {
    //   state.settingsLoading = true;
    // },
    // [loadSettings.fulfilled]: (state, action) => {
    //   state.settingsLoading = false;
    //   state.settings = action.payload.settings;
    // },
    // [loadSettings.rejected]: (state) => {
    //   state.settingsLoading = false;
    //   state.error =
    //     'Error, something went wrong. Contact support if problem persist';
    // },
  },
});

export const { clapForSetting, changeDevice } = settingsSlice.actions;

export default settingsSlice.reducer;
