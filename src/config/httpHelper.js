export const getHttpStatusCode = (payload) => {
  if (!payload || !payload.response) return -1;

  return payload.response.status || -1;
};

export const getHttpResponseBody = (payload) => {
  if (!payload || !payload.response) return {};

  return payload.response.data || {};
};
