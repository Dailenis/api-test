'use_strict';

const httpStatus = require('http-status-codes');

module.exports = {
  ok: (res, data) => {
    res.status(httpStatus.OK).json(data);
  },
  created: (res, data) => {
    res.status(httpStatus.CREATED).json(data);
  },
  notFound: (res, msg) => {
    res.status(httpStatus.NOT_FOUND).json({
      message: msg || 'Not found',
    });
  },
  emptyList: (res) => {
    res.status(httpStatus.OK).json({
      data: [],
      message: 'No records found',
    });
  },
  noContent: (res) => {
    res.status(httpStatus.NO_CONTENT).json({
      message: 'OK',
    });
  },
  error: (res, data) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json(data);
  },
  badRequest: (res, data) => {
    res.status(httpStatus.BAD_REQUEST).json(data);
  },
  forbiden: (res, data) => {
    res.status(httpStatus.FORBIDDEN).json(data);
  },
  unauthorized: (res, data) => {
    res.status(httpStatus.UNAUTHORIZED).json(data);
  },
  notAcceptable: (res, data) => {
    res.status(httpStatus.NOT_ACCEPTABLE).json(data);
  },
};
