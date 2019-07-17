import {
    STARS_ASYNC_GET_BEGIN,
    STARS_ASYNC_GET_SUCCESS,
    STARS_ASYNC_GET_FAILED,
    PLANETS_ASYNC_GET_BEGIN,
    PLANETS_ASYNC_GET_SUCCESS,
    PLANETS_ASYNC_GET_FAILED,
  } from './data';
  
  import {
    LAST_DATA_FETCH_DATETIME_GET,
    LAST_DATA_FETCH_DATETIME_SET,
    AUDIO_MUTE_TOGGLE,
    AUDIO_SOURCE_CHANGE,
    SELECTED_SOLARSYSTEM_GET,
    SELECTED_SOLARSYSTEM_SET,
    BOOKMARKS_TOGGLE_SOLARSYSTEM,
    BOOKMARKS_DELETE_ALL,
  } from './ui';
  
  export const actionTypes = {
    data: {
      STARS_ASYNC_GET_BEGIN,
      STARS_ASYNC_GET_SUCCESS,
      STARS_ASYNC_GET_FAILED,
      PLANETS_ASYNC_GET_BEGIN,
      PLANETS_ASYNC_GET_SUCCESS,
      PLANETS_ASYNC_GET_FAILED,
      },
    ui: {
      LAST_DATA_FETCH_DATETIME_GET,
      LAST_DATA_FETCH_DATETIME_SET,
      AUDIO_MUTE_TOGGLE,
      AUDIO_SOURCE_CHANGE,
      SELECTED_SOLARSYSTEM_GET,
      SELECTED_SOLARSYSTEM_SET,
      BOOKMARKS_TOGGLE_SOLARSYSTEM,
      BOOKMARKS_DELETE_ALL,
    },
    filters: {
      FILTER_STARS_BY_MASS_CHANGE: "FILTER_STARS_MASS",
      FILTER_STARS_BY_RADIUS_CHANGE: "FILTER_SOLAR_RADIUS",
      FILTER_STARS_BY_TEMP_CHANGE: "FILTER_SOLAR_TEMP",  
    },
    sorting: {},
  };
  