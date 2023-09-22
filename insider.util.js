import isEmpty from 'lodash.isempty';

import insiderService from './index';

export const insiderParamArrayObject = (key, value, dataType) => ({
  key,
  value,
  dataType,
});

export const insiderTrackEvent = ({ window, eventName, params }) => {
  if (isEmpty(params)) {
    insiderService.trackingEvent(window, eventName);
  } else {
    insiderService.trackingEvent(window, eventName, params);
  }
};

export const insiderInit = window => {
  insiderService.init(window);
};

export const insiderSetIdentifier = (window, profile) => {
  insiderService.insiderSetIdentifier(window, profile);
};
