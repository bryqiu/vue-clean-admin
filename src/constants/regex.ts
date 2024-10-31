/** 正则表达式 */

/** 地址正则 */
export const LINK_URL =
  /^(?:https?|ftp):\/\/(?:\S+@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])|(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9](?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9])*\.[a-z\u00a1-\uffff]{2,})(?::\d{2,5})?(?:\/\S*)?$/;

/** 邮箱正则 */
export const EMAIL_REG = /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

/** 密码强度正则(以字母开头，长度在6~18之间，只能包含字母、数字和下划线) */
export const PASSWORD_STRENGTH = /^[a-z]\w{5,17}$/i;

/** 邮政编码正则(中国大陆邮政编码为6位数字) */
export const POSTAL_CODE = /[1-9]\d{5}(?!\d)/;

/** 正整数正则 */
export const POSITIVE_INTEGER = /^[1-9]\d*$/;
