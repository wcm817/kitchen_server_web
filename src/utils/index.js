export const hasLoginCookie = () => {
  let cookieArr = document.cookie.split(';') || [];
  for (let i = 0; i < cookieArr.length; i++) {
    let keyArr = cookieArr[i].split('=');
    if (keyArr.length !== 2) continue;
    if (keyArr[0].trim() === 'kitchen') {
      return keyArr[1];
    }
  }
  return false;
};