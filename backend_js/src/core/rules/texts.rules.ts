export const MIN_CHARACTERS = 9;
export const MAX_TITLE_LENGTH = 200;
export const MAX_DESCRIPTION_LENGTH = 2000;
export const PASSWORD_RULE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
export const EMAIL_RULE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const USERNAME_RULE = /^[a-zA-Z0-9_]{3,30}$/;
export const URL_RULE = /^(http?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.]*)*\/?$/;
export const SECURE_URL_RULE = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.]*)*\/?$/;